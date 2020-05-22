// Modules
const express = require('express')
// initializing an instance of express
const app = express()
// define a port
const port = 3000

// ROUTES

// Root
// ask for user name
app.get('/', (req, res) => res.send('Homepage'))

// show all messages
// app.get('/', (req, res) => res.send('Homepage'))

// save a message
// app.post('/messages', (req, res) => res.send('Root'))

// del a message
// app.del('/', (req, res) => res.send('Root'))

app.listen(port, () => console.log(`listening on port ${port}`))
