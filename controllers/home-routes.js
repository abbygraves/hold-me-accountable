const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Updates} = require('../models');
const { update } = require('../models/User');
const withAuth = require('../utils/auth');

// get all posts for homepage
// router.get('/', (req, res) => {
//   console.log('======================');
//   Post.findAll({
//     attributes: [
//       'id',
//       'title',
//       'created_at',
//     ],
//     include: [
//       {
//         model: Comment,
//         attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//         include: {
//           model: User,
//           attributes: ['username']
//         }
//       },
//       {
//         model: User,
//         attributes: ['username']
//       }
//     ]
//   })
//     .then(dbPostData => {
//       const posts = dbPostData.map(post => post.get({ plain: true }));

//       res.render('homepage', {
//         posts,
//         loggedIn: req.session.loggedIn
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });
//test route
router.get('/', withAuth, async (req, res) => {
  console.log('======================');
  const dbUserData = await User.findByPk(req.session.user_id, {
    attributes: { exclude: ["password"]
    },
    include: [{model: Updates}, {model: Post}, {model: Comment}],
    
  });

  // const dbPostData = await Post.findOne(req.body.user_id, {
  //   include: [{model: User}]});

  // console.log("db post", dbPostData);
  // const postData = await dbPostData.get({plain: true});
  // console.log("db plain post", postData);
    console.log(req.session.user_id);
console.log("===============================================================================================");
  // const ddbUpdatesData = await Updates.findAll({ where: {user_id: req.session.user_id}});
  // console.log("db update", ddbUpdatesData);
  // const updatesData = await ddbUpdatesData.get({plain: true});
  console.log("==========================================================================================");
  // console.log("db user", dbUserData);
  const userData = await dbUserData.get({plain: true});
  const {updates} = userData
  
  console.log(userData);
  console.log("==============================================================");
  console.log(updates);
  res.render('homepage', {
    userData,
    //postData,
    updates,
    logged_in: true, 
  })
});
  


// get single post
// router.get('/post/:id', (req, res) => {
//   Post.findOne({
//     where: {
//       id: req.params.id
//     },
//     attributes: [
//       'id',
//       'title',
//       'created_at'
//       ],
//     include: [
//       {
//         model: Comment,
//         attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//         include: {
//           model: User,
//           attributes: ['username']
//         }
//       },
//       {
//         model: User,
//         attributes: ['username']
//       }
//     ]
//   })
//     .then(dbPostData => {
//       if (!dbPostData) {
//         res.status(404).json({ message: 'No post found with this id' });
//         return;
//       }

//       const post = dbPostData.get({plain: true  });

//       res.render('single-post', {
//         post,
//         // loggedIn: req.session.loggedIn
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
