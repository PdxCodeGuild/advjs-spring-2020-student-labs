const jwt = require('jsonwebtoken')
const User = require('../models/User')

const express = require('express')
const router = express.Router()

router.get('/hello-protected', (req, res) => {
  const authorization = req.header('Authorization') || ''
  const [type, token] = authorization.split(' ')

  if (type === 'Bearer' && jwt.verify(token, 'CHANGEME!')) {
    const payload = jwt.decode(token, 'CHANGEME!')
    User.findOne({ _id: payload._id }, (err, user) => {
      if (err) return res.status(500).send(err)

      return res.send({ message: 'this is a secret message...' })
    })
  } else {
    res.status(401).send('Unauthorized')
  }
})

module.exports = router
