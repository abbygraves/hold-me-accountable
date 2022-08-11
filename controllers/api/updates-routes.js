const router = require('express').Router();
const { request } = require('express');
const { Updates, User, Comment, Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Updates.findAll({
    attributes: [
      'id',
      'updates_text',
      'created_at'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbUpdatesData => res.json(dbUpdatesData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Updates.findAll({
    where: {
      id: req.params.id,
    }
  })
    .then(dbUpdatesData => res.json(dbUpdatesData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



router.post('/', withAuth, (req, res) => {
  //{Updates_text: "STRING", user_id: "INT", post_id: "INT"}
  // console.log(req.body)
  Updates.create({
    updates_text: req.body.updates,
    user_id: req.session.user_id,
    // post_id: req.body.post_id
  })
    .then(dbUpdatesData => res.json(dbUpdatesData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});



router.delete('/:id', withAuth, (req, res) => {
  Updates.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbUpdatesData => {
      if (!dbUpdatesData) {
        res.status(404).json({ message: 'No Updates found with this id!' });
        return;
      }
      res.json(dbUpdatesData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
