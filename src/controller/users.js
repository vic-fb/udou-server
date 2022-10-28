const express = require('express');

const router = express.Router();
const usersService = require('../service/users');

router.get('/:id', (req, res) => {
  usersService.getUserById(req.params.id)
    .then((data) => res.send(data))
    .catch(() => res.status(500).send());
});

router.post('/', (req, res) => {
  const user = req.body;
  usersService.addUser(user)
    .then((data) => res.send(data))
    .catch(() => res.status(500).send());
});

module.exports = router;
