const express = require('express');
const router = express.Router();
const contactController = require('../controller/contactController');

// POST /api/contact-messages
router.post('/contact-messages', contactController.createContactMessage);

module.exports = router;