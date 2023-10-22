const express = require('express')
const { insert } = require('../services/mongoService')
const InstructionModel = require('../models/Instruction.js')

const router = express.Router()

router.post('/', async (req, res) => {
    const { role, content } = req.body

    await insert(InstructionModel, { role, content })
})

router.get('/', async (req, res) => {
    const instructions = await InstructionModel.find({})

    res.json(instructions)
})

module.exports = router