const express = require('express')
const { insert } = require('../services/mongoService')
const InstructionModel = require('../models/Instruction')

const router = express.Router()

router.post('/', async (req, res) => {
    const { role, content } = req.body

    await insert(InstructionModel, { role, content })

    res.sendStatus(201)
})

router.get('/', async (req, res) => {
    const instructions = await InstructionModel.find({})

    res.json(instructions)
})

module.exports = router