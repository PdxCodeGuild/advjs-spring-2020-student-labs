const mongoose = require('mongoose')

const { Schema } = mongoose
const { ObjectId } = Schema.Types

const messageSchema = Schema({
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  room: {
    type: String,
    required: true
  },
  user: {
    type: ObjectId,
    required: true,
    ref: 'User'
  }
})

const Message = mongoose.model('Message', messageSchema)

module.exports = Message
