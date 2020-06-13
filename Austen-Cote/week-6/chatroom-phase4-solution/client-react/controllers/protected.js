const jwt = require('jsonwebtoken')
const User = require('../models/User')
const Message = require('../models/Message')

const express = require('express')
const router = express.Router()

// provides a short authenticate to other get routes
const authenticate = (req, res, next) => {
  const authorization = req.header('Authorization') || ''
  const [type, token] = authorization.split(' ')
  try {
    if (type === 'Bearer' && jwt.verify(token, 'CHANGEME!')) {
      const payload = jwt.decode(token, 'CHANGEME!')
      User.findOne({ _id: payload._id }, (err, userDoc) => {
        if (err) return res.status(500).send(err)
        req.user = userDoc
        return next()
      })
    } else {
      res.status(401).send('Unauthorized')
    }
  } catch (err) {
    res.status(401).send('Unauthorized')
  }
}

router.get('/messages', [authenticate], (req, res) => {
  Message.find({}).populate('user', 'username').exec((err, result) => {
    if (err) return res.status(500).send(err)
    console.log(result)
    return res.json(result)
  })
})

router.post('/messages', [authenticate], (req, res) => {
  const message = Message.postMessage(req.body.text, req.body.date, req.body.user)
  message.save()

  return res.status(201).send(message, 'post successful')
})

module.exports = router

// router.post('/todos', [authenticate], (req, res) => {
//   const authorization = req.header('Authorization') || ''
//   const [type, token] = authorization.split(' ')

//   if (type === 'Bearer' && jwt.verify(token, 'CHANGEME!')) {
//     const payload = jwt.decode(token, 'CHANGEME!')
//     console.log(payload)
//     const todoItem = { text: req.body.text, done: false }
//     User.findOne({ _id: payload._id }, (err, user) => {
//       if (err) return res.status(500).send(err)
//       user.todos.push(todoItem)
//       user.save()
//       return res.send(user)
//     })
//   } else {
//     res.status(401).send('Unauthorized')
//   }
// })
// router.post('/update', (req, res) => {
//   const authorization = req.header('Authorization') || ''
//   const [type, token] = authorization.split(' ')

//   if (type === 'Bearer' && jwt.verify(token, 'CHANGEME!')) {
//     const payload = jwt.decode(token, 'CHANGEME!')

//     const todoItem = { text: req.body.text }
//     console.log(todoItem)
//     User.findOne({ _id: payload._id }, (err, user) => {
//       if (err) return res.status(500).send(err)
//       user.updateOne(todoItem, { $set: { done: true } })
//       user.save()
//       return res.send(user)
//     })
//   } else {
//     res.status(401).send('Unauthorized')
//   }
// })

//   app.post('/update', (req, res) => {
//     // console.log(req.body.text, 'this is res line 29')
//     const item = { text: req.body.text }
//     collection.updateOne(item, { $set: { done: true } }, (err, result) => {
//       if (err) return res.send(err)
//       return res.send('OK')
//     })
//   })

