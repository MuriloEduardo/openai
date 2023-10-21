const express = require('express');
const router = express.Router();
const openaiService = require('../services/openaiService');

router.post('/completions', async (req, res) => {
    const { prompt } = req.body;

    try {
        const response = await openaiService.createCompletion(prompt);
        res.json(response);
    } catch (error) {
        const { status, ...rest_error } = error;
        res.status(status || 500).json(rest_error);
    }
});

module.exports = router;
