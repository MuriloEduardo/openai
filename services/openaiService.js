const { OpenAI } = require('openai');
const { OPENAI_API_KEY } = require('../env');

const openai = new OpenAI(OPENAI_API_KEY);

const openaiService = {
    fetchCompletions: async (prompt) => {
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

    fetchConversations: async (messages) => {
        try {
            const response = await openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                messages,
            });

            return response;
        } catch (error) {
            throw error;
        }
    },
};

module.exports = openaiService;
