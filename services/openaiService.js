const { OpenAI } = require('openai');
const { OPENAI_API_KEY } = require('../env');
const { insert } = require('./mongoService');
const ConversationModel = require('../models/Conversation');

const openai = new OpenAI(OPENAI_API_KEY);

const openaiService = {
    createCompletion: async (prompt) => {
        try {
            const response = await openai.Completion.create({
                engine: 'davinci',
                prompt,
            });

            return response;
        } catch (error) {
            throw error;
        }
    },
    createConversation: async (messages) => {
        try {
            const response = await openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                messages,
            });

            await insert(ConversationModel, { messages, response });

            return response;
        } catch (error) {
            throw error;
        }
    },
};

module.exports = openaiService;
