const express = require('express');
const router = express.Router();
const openaiService = require('../services/openaiService');

router.post('/', async (req, res) => {
    const { message } = req.body;

    try {
        const prompt = openaiService.mountConversationPrompt(message);
        console.log('mountConversationPrompt', prompt);

        const response = await openaiService.createConversation(prompt);
        console.log('createConversation', response);

        res.json(response);
    } catch (error) {
        const { status, ...rest_error } = error;

        console.error('createConversation error', error);

        res.status(status || 500).json(rest_error);
    }
});

module.exports = router;
