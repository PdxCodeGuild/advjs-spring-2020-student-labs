/* globals fetch prompt */
import Chat from './chat'
import Rooms from './rooms'
import React from 'react'
import io from 'socket.io-client'
const socket = io()

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { messages: [], room: 'general', formValue: '' }
  }

  componentDidMount () {
    socket.on('chat message', msg => {
      console.log('Got a message:', msg)
      this.setState({ messages: this.state.messages.concat(msg) })
    })

    // Get initial list of messages
    fetch('/messages')
      .then(response => response.json())
      .then(data => {
        console.log('fetched data from server')
        this.setState({ messages: data })
      })
  }

  sendMessage (evt) {
    evt.preventDefault()
    const message = { text: this.state.formValue, nick: this.props.nick, room: this.state.room, date: new Date() }
    socket.emit('chat message', message)
  }

  handleChangeFormInput (event) {
    this.setState({ formValue: event.target.value })
  }

  handleAddRoom () {
    const room = prompt('Enter a room name')
    this.setState({ room: room })
  }

  handleChangeRoom (evt) {
    const room = evt.target.value
    this.setState({ room: room })
  }

  getRooms () {
    const rooms = this.state.messages.map(msg => msg.room)
    rooms.push(this.state.room) // we have to add the currentRoom to the list, otherwise it won't be an option if there isn't already a message with that room
    const filtered = rooms.filter(room => room) // filter out undefined or empty string
    return Array.from(new Set(filtered)) // filters out the duplicates
  }

  render () {
    return <div>
      <Rooms
        room={this.state.room}
        rooms={this.getRooms()}
        handleAddRoom={this.handleAddRoom.bind(this)}
        handleChangeRoom={this.handleChangeRoom.bind(this)}
      />
      <form id='send-message' onSubmit={this.sendMessage.bind(this)}>
        <input id='message-text' type='text' placeholder='message...' value={this.state.formValue} onChange={this.handleChangeFormInput.bind(this)} />
        <button type='submit'>Send</button>
      </form>
      <Chat messages={this.state.messages} room={this.state.room} />
    </div>
  }
}

export default App
