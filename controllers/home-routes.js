const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Updates} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {

  const dbUserData = await User.findByPk(req.session.user_id, {
    attributes: { exclude: ["password"]
    },
    include: [{model: Updates}, {model: Post}, {model: Comment}],
    
  });

  const userData = await dbUserData.get({plain: true});

  const {updates} = userData
  const {comments} = userData
  const {post} = userData
  
  res.render('homepage', {
    userData,
    comments,
    updates,
    post,
    logged_in: true, 
  })
});
  

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
