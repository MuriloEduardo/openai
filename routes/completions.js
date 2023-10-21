const express = require('express');
const router = express.Router();
const openaiService = require('../services/openaiService');

router.post('/completions', async (req, res) => {
    const { prompt } = req.body;

    try {
        const response = await openaiService.fetchCompletions(prompt);
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao acessar a API de Completions' });
    }
});

module.exports = router;
