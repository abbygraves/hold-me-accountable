const router = require('express').Router();
const { request } = require('express');
const { Updates } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Updates.findAll()
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
  Updates.create({
    updates_text: req.body.updates_text,
    user_id: req.session.user_id,
    post_id: req.body.post_id
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
