const mongoose = require('mongoose');


const conversationSchema = new mongoose.Schema({
    messages: [Object],
    response: Object,
});

const ConversationModel = mongoose.model('conversations', conversationSchema);

module.exports = ConversationModel;
