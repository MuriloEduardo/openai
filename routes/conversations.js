const express = require('express')
const openaiService = require('../services/openaiService')

const router = express.Router()

router.post('/', async (req, res) => {
    const { message } = req.body

    try {
        const prompt = await openaiService.mountConversationPrompt(message)

        const response = await openaiService.createConversation(prompt)

        res.json(response)
    } catch (error) {
        const { status, ...rest_error } = error

        console.error('createConversation error', error)

        res.status(status || 500).json(rest_error)
    }
})

module.exports = router
