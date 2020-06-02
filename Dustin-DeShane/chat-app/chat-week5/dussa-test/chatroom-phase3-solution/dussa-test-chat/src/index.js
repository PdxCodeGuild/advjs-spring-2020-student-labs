import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
const io = require('socket.io-client')
const socket = io()

const nickname = prompt('Enter your nickname:')

const handleSubmitMessage = function (evt) {
  const newMessage = document.getElementById('message-text').value
  console.log(evt)
  evt.preventDefault()
  const message = { text: newMessage, nick: nickname, room: 'default', date: new Date() }
  socket.emit('chat message', message)
  document.getElementById('send-message').reset()
}

class Chat extends React.Component {
  constructor (props) {
    super(props)
    fetch('/messages')
      .then(response => response.json())
      .then(data => {
        console.log('fetched data from server')
        this.setState({ messages: data })
      })
    socket.on('chat message', msg => {
      console.log('Got a message:', msg)
      this.setState({ messages: this.state.messages.concat(msg) })
    })
    this.state = {
      messages: []
    }
  }

  render () {
    return (
      <div>
        <h1>Chat House</h1>
        <form id='send-message' onSubmit={handleSubmitMessage}>
          <div id='chat-window'>
            <ul>
              {this.state.messages.map((message, i) =>
                <li key={i}>{message.text}</li>
              )}
            </ul>
          </div>
          <input id='message-text' type='text' name='description' placeholder='message...' />
          <button type='submit'>Send</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(
  <Chat />,
  document.getElementById('root')
)
