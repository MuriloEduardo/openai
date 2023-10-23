const { OpenAI } = require('openai')
const { OPENAI_API_KEY } = require('../env')
const { insert, find } = require('./mongoService')
const InstructionModel = require('../models/Instruction')
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
    mountConversationPrompt: async (messages) => {
        const instructions = await find(InstructionModel, {}, { _id: 0, __v: 0, identifier: 0 })

        console.log('mountConversationPrompt', instructions);

        const userMessages = messages.map(message => ({
            role: 'user',
            content: message,
        }))

        return [...userMessages, ...instructions]
    },
}

module.exports = openaiService
