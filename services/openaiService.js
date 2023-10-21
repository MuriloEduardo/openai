const { OpenAI } = require('openai')
const { OPENAI_API_KEY } = require('../env')
const { insert } = require('./mongoService')
const ConversationModel = require('../models/Conversation')

const openai = new OpenAI(OPENAI_API_KEY)

const openaiService = {
    createCompletion: async (prompt) => {
        try {
            const response = await openai.Completion.create({
                engine: 'davinci',
                prompt,
            })

            return response
        } catch (error) {
            throw error
        }
    },
    createConversation: async (messages) => {
        try {
            const response = await openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                messages,
            })

            await insert(ConversationModel, { messages, response })

            return response
        } catch (error) {
            throw error
        }
    },
    mountConversationPrompt: (message) => {
        const systemMessage = {
            role: 'system',
            content: 'Você é um assistente de bate-papo.',
        }

        const userMessage = {
            role: 'user',
            content: message,
        }

        const assistantMessage = {
            role: 'assistant',
            content: 'Por que o frango atravessou a rua?',
        }

        return {
            messages: [systemMessage, userMessage, assistantMessage],
        }
    },
}

module.exports = openaiService
