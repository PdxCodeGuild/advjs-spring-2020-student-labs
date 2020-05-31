import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import io from 'socket.io-client'
import messageList from './test-messages-file.json'

const socket = io()
const nickname = prompt('Enter your nickname:')

socket.on('chat message', msg => {
  console.log('Got a message:', msg)
})

const sendForm = document.getElementById('send-message')
const messageTextField = document.getElementById('message-text')

sendForm.onsubmit = evt => {
  evt.preventDefault()
  const message = { text: messageTextField.value, nick: nickname, date: new Date() }
  // const message = { text: messageTextField.value, nick: nickname, room: state.room, date: new Date() }
  socket.emit('chat message', message)
}

function ShowMessages ({messages}) {
  return (
    <div>
      <ul>
        {messages.map((message, i) =>
          <li key={i}>{message.text}</li>
        )}
      </ul>
    </div>
  )
}

ReactDOM.render(
  <ShowMessages messages={[messageList]} />,
  document.getElementById('root')
)
