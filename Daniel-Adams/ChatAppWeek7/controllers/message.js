const jwt = require('jsonwebtoken')
const express = require('express')
const router = express.Router()
const Message = require('../models/Message')
const User = require('../models/User')

router.post('/messages', (req, res) => {
  try {
    if (!jwt.verify(msg.token, 'CHANGEME!')) {
      return console.log('not authorized')
    }
    const payload = jwt.decode(req.body.token, 'CHANGEME!')

    User.findOne({ _id: payload._id }, async (err, userDoc) => {
      if (err) return console.error(err)

      const message = new Message()
      message.text = req.body.text
      message.date = req.body.date
      message.room = req.body.room
      message.user = req.body.token

      await message.save()
      res.status(201).send()
    })
  } catch (err) {
    return console.error(err)
  }
})

// get
// send message up with username

module.exports = router
