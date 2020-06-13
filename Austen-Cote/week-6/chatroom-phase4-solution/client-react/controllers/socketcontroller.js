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

          console.log('about to emit chat')
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

// UNUSED SOCKET
// socket.on('login', (msg) => {
//   try {
//     console.log(msg, 'this is the message')
//     if (!jwt.verify(msg, 'CHANGEME!')) {
//       return console.log('Not authorized')
//     }

//     // const payload = jwt.decode(msg.token, 'CHANGEME!')

//     Message.find({}, (err, message) => {
//       if (err) return console.error(err)
//       io.emit('login', {
//         ...msg,
//         message: { message: message },
//         token: undefined
//       })
//     })
//   } catch (err) {
//     return console.error(err)
//   }
// })