const mongoose = require('mongoose')
const { MONGO_URL } = require('../env')

(async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log('Conectado ao MongoDB')
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error)
  }
})()

const insert = (model, data) => {
  const newDoc = new model(data)
  return newDoc.save()
}

const find = (model, filters = {}) => {
  return model.find(filters).exec()
}

module.exports = { insert, find }
