import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
const io = require('socket.io-client')
const socket = io()

const nickname = prompt('Enter your nickname:')
let currentRoom = 'Lobby'


const handleSubmitMessage = function (evt) {
  const newMessage = document.getElementById('message-text').value
  console.log(evt)
  evt.preventDefault()
  const message = { text: newMessage, nick: nickname, room: 'Lobby', date: new Date() }
  socket.emit('chat message', message)
  document.getElementById('send-message').reset()
}

const addRoom = function (roomName) {

}

const changeRoom = function (roomName) {

}


function getRooms (data, currentRoom) {
  const rooms = data.map(msg => msg.room)
  rooms.push(currentRoom) // we have to add the currentRoom to the list, otherwise it won't be an option if there isn't already a message with that room
  const filtered = rooms.filter(room => room) // filter out undefined or empty string
  return Array.from(new Set(filtered)) // filters out the duplicates
}

class Chat extends React.Component {
  constructor (props) {
    super(props)
    fetch('/messages')
      .then(response => response.json())
      .then(data => {
        console.log('fetched data from server')
        this.state.roomList = getRooms(data, currentRoom)
        console.log(this.state.roomList)
        this.setState({ messages: data })
      })
    socket.on('chat message', msg => {
      console.log('Got a message:', msg)
      this.setState({ messages: this.state.messages.concat(msg) })
    })
    this.state = {
      messages: [],
      roomList: []
    }
  }

  render () {
    return (
      <div>
        <h1>Chat House</h1>
        <h2>Currently in: {currentRoom}</h2> <form>
          <select name='roomList' id='roomList'>
            <option value={currentRoom} selected>{currentRoom}</option> 
            {this.state.roomList.map((room) =>
              <option value={room}>{room}</option>
            )}
          </select></form>
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
