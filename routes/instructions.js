const express = require('express')
const InstructionModel = require('../models/Instruction')
const { insert, find } = require('../services/mongoService')

const router = express.Router()

router.post('/', async (req, res) => {
    const { role, content, identifier } = req.body

    await insert(InstructionModel, {
        role,
        content,
        identifier,
    })

    res.sendStatus(201)
})

router.get('/', async (req, res) => {
    const instructions = await find(InstructionModel)

    res.json(instructions)
})

module.exports = router