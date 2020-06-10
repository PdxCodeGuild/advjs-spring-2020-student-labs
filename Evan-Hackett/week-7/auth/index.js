const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const AuthController = require('./controllers/auth')
const ProtectedRoutes = require('./controllers/protected')

const app = express()

app.use(express.json())
app.use(morgan('tiny'))

// login and sign-up routes
app.use('/', AuthController)

// public route
app.get('/hello', (req, res) => {
  res.send({ hello: 'hello!' })
})

// protected routes (requires authentication)
app.use('/', ProtectedRoutes)

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

startServer(8000)
