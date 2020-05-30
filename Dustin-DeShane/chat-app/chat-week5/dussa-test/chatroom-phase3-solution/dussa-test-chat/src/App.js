import React from 'react';
import logo from './logo.svg';
import './App.css';

const io = require('socket.io-client')
const socket = io()



socket.on('chat message', msg => {
  console.log('Got a message:', msg)
})

function App() {
  const nickname = prompt('Enter your nickname:')

  socket.on('chat message', msg => {
    console.log('Got a message:', msg)
    // updateState('messages', state.messages.concat(msg))
  })



  const handleSubmitMessage = function (evt) {
    console.log(evt)
    evt.preventDefault()
    const message = { text: 'def message', nick: nickname, room: 'default', date: new Date() }
    socket.emit('chat message', message)
  }

  return (
    <div>
      <h1>Chat House</h1>

      <div id='chat-container' />

      <form id='send-message' onSubmit={handleSubmitMessage}>
        <input id='message-text' type='text' name='description' placeholder='message...' />
        <button type='submit'>Send</button>
      </form>
    </div>
  )
}



export default App;
