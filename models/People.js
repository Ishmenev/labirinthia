const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PeopleSchema = new Schema({
  // id: String,
  // socialName: String
})

mongoose.model('users', PeopleSchema)
