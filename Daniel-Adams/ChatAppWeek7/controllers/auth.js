const jwt = require('jsonwebtoken')
const User = require('../models/User')
const express = require('express')
const router = express.Router()

router.post('/signup', (req, res) => {
  User.findOne({ username: req.body.User }, async (err, userExists) => {
    if (err) return res.status(500).send(err)
    if (userExists) return res.status(400).send('Two objects cannot exist in the same space at the same time')
    const user = await User.signUp(req.body.username, req.body.password)
    res.status(201).send(user.sanitize())
  })
})

router.post('/login', (req, res) => {
  User.findOne({ username: req.body.username }, async (err, user) => {
    if (err) return res.status(500).send(err)
    if (!user || !user.comparePassword(req.body.password)) return res.status(400).send('Invalid login information')

    const token = jwt.sign({
      _id: user._id
    }, 'CHANGEME!')

    res.send({ token })
  })
})

module.exports = router
