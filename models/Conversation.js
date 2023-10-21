const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    role: { type: String, required: true },
    content: { type: String, required: true },
});

const responseSchema = new mongoose.Schema({
    id: { type: String, required: true },
    object: { type: String, required: true },
    created: { type: Number, required: true },
    model: { type: String, required: true },
    choices: [
        {
            index: { type: Number, required: true },
            message: {
                role: { type: String, required: true },
                content: { type: String, required: true },
            },
            finish_reason: { type: String, required: true },
        },
    ],
    usage: {
        prompt_tokens: { type: Number, required: true },
        completion_tokens: { type: Number, required: true },
        total_tokens: { type: Number, required: true },
    },
});

const conversationSchema = new mongoose.Schema({
    messages: [messageSchema],
    response: responseSchema,
});

const ConversationModel = mongoose.model('conversations', conversationSchema);

module.exports = ConversationModel;
