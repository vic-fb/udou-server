const express = require('express');

const router = express.Router();
const trackablesService = require('../service/trackables');

router.get('/', (req, res) => {
  trackablesService.getTrackables()
    .then((data) => res.send(data))
    .catch(() => res.status(500).send());
});

router.post('/', (req, res) => {
  const trackable = req.body;
  trackablesService.addTrackable(trackable)
    .then((data) => res.send(data))
    .catch(() => res.status(500).send());
});

router.get('/:user', (req, res) => {
  trackablesService.getTrackablesByUser(req.params.user)
    .then((data) => res.send(data))
    .catch(() => res.status(500).send());
});

module.exports = router;
