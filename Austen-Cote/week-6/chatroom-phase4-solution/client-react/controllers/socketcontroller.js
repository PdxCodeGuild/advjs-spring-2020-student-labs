const jwt = require('jsonwebtoken')
const Message = require('../models/Message')
const User = require('../models/User')

function socketController (io) {
  return (socket) => {
    console.log('a user connected')

    socket.on('chat message', (msg) => {
      try {
        if (!jwt.verify(msg.token, 'CHANGEME!')) {
          return console.log('Not authorized')
        }

        const payload = jwt.decode(msg.token, 'CHANGEME!')

        User.findOne({ _id: payload._id }, async (err, userDoc) => {
          if (err) return console.error(err)

          const message = new Message()
          message.text = msg.text
          message.date = msg.date
          message.user = userDoc
          message.room = msg.room

          await message.save()

          io.emit('chat message', {
            ...msg,
            user: { username: userDoc.username },
            token: undefined
          })
        })
      } catch (err) {
        return console.error(err)
      }
    })
    socket.on('disconnect', () => {
      console.log('user disconnected')
    })
  }
}

module.exports = socketController

  //   io.on('connection', (socket) => {
  //     console.log('a user connected')

  //     socket.on('chat message', (msg) => {
  //       io.emit('chat message', msg)
  //       fs.appendFile(deps.messagesPath, '\n' + JSON.stringify(msg), err => err ? console.log(err) : null)
  //     })

  //     socket.on('disconnect', () => {
  //       console.log('user disconnected')
  //     })
  //   })