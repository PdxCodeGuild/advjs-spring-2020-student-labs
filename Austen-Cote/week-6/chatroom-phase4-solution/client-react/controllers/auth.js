const jwt = require('jsonwebtoken')
const User = require('../models/User')

const express = require('express')
const router = express.Router()

// Post request to sign up
router.post('/sign-up', (req, res) => {
  console.log(req.body, 'this is request.body sign up')

  // look up the user with the user model and findOne Mongoose syntax
  User.findOne({ username: req.body.username }, async (err, userExists) => {
    if (err) return res.status(500).send(err)

    // check if the user exist and if it does let the user know
    if (userExists) return res.status(400).send('username already exists')

    // after you handle the checks call the sign up method that is within the user model with the users username and password and once you do use the sanitize method within the user model
    const user = await User.signUp(req.body.username, req.body.password)
    res.status(201).send(user.sanitize())
  })
})

// Post request to Login
router.post('/login', (req, res) => {
  console.log('login sent')

  // Use the user model to with the mongoose syntac findOne to find a user by the username
  User.findOne({ username: req.body.username }, async (err, user) => {
    if (err) return res.status(500).send(err)

    // compare the username and password and check for errors
    if (!user || !user.comparePassword(req.body.password)) return res.status(400).send('Invalid login information')

    // make a token using jwt.sgin()
    const token = jwt.sign({
      _id: user._id
    }, 'CHANGEME!')
    console.log(token, user.username)
    // send the toke and username to the client side
    res.send({ token, username: user.username })
    console.log('login finished')
  })
})

module.exports = router
