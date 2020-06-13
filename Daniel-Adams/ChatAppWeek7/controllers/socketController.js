const jwt = require('jsonwebtoken')
const User = require('../models/User')
const Message = require('../models/Message')

function socketController (io) {
  return (socket) => {
    console.log('connected to socket io')
    socket.on('chat message', (msg) => {
      console.log('got a message', msg)
      try {
        if (!jwt.verify(msg.token, '!CHANGEME')) {
          return console.log('not authorized')
        }
        const payload = jwt.decode(msg.token, '!CHANGEME')

        User.findOne({ _id: payload._id }, async (err, userDoc) => {
          if (err) return console.error(err)
          const message = new Message()
          message.text = msg.text
          message.date = msg.date
          message.room = msg.room
          message.user = userDoc

          await message.save()
          io.emit('chat message', {
            ...msg,
            user: { username: userDoc },
            token: undefined
          })
        })
      } catch (err) {
        return console.error(err)
      }
    })
  }
}

module.exports = socketController
