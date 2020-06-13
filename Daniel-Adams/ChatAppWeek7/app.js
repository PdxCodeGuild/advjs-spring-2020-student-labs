const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const AuthController = require('./controllers/auth')
// const MessageController = require('./controllers/messageController')
const socketController = require('./controllers/socketController')

const app = express()

app.use(express.static('static'))
app.use(express.json())
app.use(morgan('tiny'))
app.use('/', AuthController)
// app.use('/messages', MessageController)

const http = require('http').createServer(app)
const io = require('socket.io')(http)

io.on('connection', socketController(io))

// we might not need lines 24-45

// app.get('/messages', (req, res) => {
//   fs.readFile(deps.messagesPath, 'utf8', (err, text) => {
//     if (err) return res.status(500).send(err)

//     const messages = text
//       .split('\n')
//       .filter(txt => txt) // will filter out empty string
//       .map(JSON.parse)

//     return res.json(messages)
//   })
// })

// app.post('/messages', (req, res) => {
//   // console.log(req)
//   const message = JSON.stringify(req.body)
//   // fs.appendFile(deps.messagesPath, '\n' + message, err => {
//   //   if (err) return res.status(500).send(err)

//     return res.send('post successful')
//   })
// })

// can rename database
const connectDatabase = async (databaseName = 'auth-test-1', hostname = 'localhost') => {
  const database = await mongoose.connect(
    `mongodb://${hostname}/${databaseName}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    }
  )

  console.log(`Database connected at mongodb://${hostname}/${databaseName}...`)

  return database
}

const startServer = port => {
  app.listen(port, async () => {
    await connectDatabase()
    console.log(`Server listening on port ${port}...`)
  })
}

startServer(8000) // quick fix
