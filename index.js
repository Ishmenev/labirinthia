const express = require('express')
const mongoose = require('mongoose')
require('./models/People')
const people = require('./routes/people')
const app = express()

mongoose.connect('mongodb+srv://EvgenyLabirintov:labirinthia-23@cluster0-qzdkt.mongodb.net/<dbname>?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, console.log('База данных запущена'))

people(app)

const PORT = 5000


app.listen(PORT, () => {
  console.log(`Сервер запущен на порте ${PORT}`)
})