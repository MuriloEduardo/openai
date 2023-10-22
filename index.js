const { PORT } = require('./env')
const express = require('express')

const app = express()

app.use(express.json())

const completionsRoutes = require('./routes/completions')
const instructionsRoutes = require('./routes/instructions')
const conversationsRoutes = require('./routes/conversations')

app.use('/completions', completionsRoutes)
app.use('/instructions', instructionsRoutes)
app.use('/conversations', conversationsRoutes)

app.listen(PORT, () => console.log(`Running in ${PORT}`))
