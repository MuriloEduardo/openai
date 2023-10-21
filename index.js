const { PORT } = require('./env');
const express = require('express');
const app = express();

app.use(express.json());

const completionsRoutes = require('./routes/completions');
const conversationsRoutes = require('./routes/conversations');

app.use('/completions', completionsRoutes);
app.use('/conversations', conversationsRoutes);

app.listen(PORT, () => {
    console.log(`Servidor Express rodando na porta ${PORT}`);
});
