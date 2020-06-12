const jwt = require('jsonwebtoken')
const User = require('../models/User')

const express = require('express')
const router = express.Router()

router.post('/sign-up', (req, res) => {
  console.log(req.body, 'this is request.body sign up')
  User.findOne({ username: req.body.username }, async (err, userExists) => {
    if (err) return res.status(500).send(err)
    if (userExists) return res.status(400).send('username already exists')

    const user = await User.signUp(req.body.username, req.body.password)
    res.status(201).send(user.sanitize())
  })
})

router.post('/login', (req, res) => {
  console.log('login sent')
  User.findOne({ username: req.body.username }, async (err, user) => {
    if (err) return res.status(500).send(err)
    if (!user || !user.comparePassword(req.body.password)) return res.status(400).send('Invalid login information')

    const token = jwt.sign({
      _id: user._id
    }, 'CHANGEME!')
    console.log(token, user.username)
    res.send({ token, username: user.username })
    console.log('login finished')
  })
})

module.exports = router
