const express = require('express');
const router = express.Router();
const openaiService = require('../services/openaiService');

router.post('/', async (req, res) => {
    const { messages } = req.body;

    try {
        const response = await openaiService.fetchConversations(messages);
        res.json(response);
    } catch (error) {
        const { status, ...rest_error } = error;
        res.status(status || 500).json(rest_error);
    }
});

module.exports = router;
