const mongoose = require('mongoose');


const instructionSchema = new mongoose.Schema({
    role: {
        type: String,
        enum: ['system', 'assistant']
    },
    content: String,
    identifier: String,
});

const InstructionModel = mongoose.model('instructions', instructionSchema);

module.exports = InstructionModel;
