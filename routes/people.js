const mongoose = require('mongoose')
const People = mongoose.model('users')

module.exports = app => {
  app.get('/api/people', async (req, res) => {

    try {
      const people = await People.find()
      res.json(people)
    } catch(err) {
      res.status(500).send('Server error')
    }
  })
}