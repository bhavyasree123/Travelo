const express = require('express');

const router = express.Router();

const { registerEvent, getAllEvents } = require('../controllers/events');

router.get('/getEvents', getAllEvents);
router.post('/regEvent', registerEvent);

module.exports = router;
