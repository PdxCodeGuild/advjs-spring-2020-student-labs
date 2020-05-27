/* globals prompt */
const { getMessages, postMessage } = require('./fetch-messages')
const { Chat } = require('./components')
const yo = require('yo-yo')
const io = require('socket.io-client')
const socket = io()

const nickname = prompt('Enter your nickname:')

const sendMessage = document.getElementById('send-message')
const messageText = document.getElementById('message-text')

function refresh () {
  getMessages()
    .then(data => {
      console.log('fetched data from server')
      updateState('messages', data)
    })
}

// const sendForm = document.getElementById('send-message')
// const messageTextField = document.getElementById('message-text')
// sendForm.onsubmit = evt => {
//   evt.preventDefault()
//   // postMessage(messageTextField.value, nickname, state.room)
// }

const state = {
  room: '',
  messages: []
}

function updateState (key, value) {
  state[key] = value
  yo.update(el, Chat(state.messages, state.room, updateState))
}

const el = Chat(state.messages, state.room, updateState)
const chatContainer = document.getElementById('chat-container')
chatContainer.appendChild(el)

// setInterval(refresh, 500)

sendMessage.onsubmit = function (e) {
  e.preventDefault() // prevents page reloading
  console.log(e, 'This function ran')
  socket.emit('chat message', messageText.innerText)
  messageText.innerText = ''
  socket.on('chat message', function (msg) {
    chatContainer.append(('<li>').value(msg))
  })
  return false
}
