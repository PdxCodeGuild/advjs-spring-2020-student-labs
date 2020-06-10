import React from 'react'
import './App.css'
import getRooms from './getRooms'
import io from 'socket.io-client'
const socket = io()

const nickname = prompt('Enter your nickname:')

class App extends React.Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNewRoom = this.handleNewRoom.bind(this)
    this.updateNewRoom = this.updateNewRoom.bind(this)
    this.state = {
      messages: [],
      rooms: [],
      nick: '',
      time: new Date(),
      room: '',
      newMessage: '',
      newRoom: ''
    }
  }

  componentWillMount () {
    this.callApi()
  }

  componentDidMount () {
    console.log(this.state.message + ' messages at componentDidMount')
    const currentrooms = getRooms(this.state.messages)
    this.setState({ rooms: currentrooms })
    socket.on('chat message', msg => {
      console.log('Got a message:', msg)
      this.setState({ messages: this.state.messages.concat(msg) })
//populatuate the rooms area from filter messages 
    })
  }

  callApi () {
    fetch('/messages')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        console.log('Stop trying to make fetch happen')
        this.setState({
          messages: data
        })
      })
  }

  handleChange (event) {
    this.setState({ room: event.target.value }, () => { console.log('new room is ' + this.state.room) })
  }

  handleSubmit (event) {
    // alert('You pressed the button')
    event.preventDefault()
    console.log(this.state.newMessage + ' current new room being set in handleSubmit')  //check is new room is here 
    const message = { text: this.state.newMessage, nick: nickname, room: this.state.room, date: new Date() }
    socket.emit('chat message', message)
    console.log(this.state.newMessage)
  }

  updateNewMessage (event) {
    this.setState({ newMessage: event.target.value }, () => { console.log(this.newMessage) })
  }

  handleNewRoom (event) {
    event.preventDefault()
    console.log('room we should update to ' + this.state.newRoom)  //check is new room is here 
    this.setState({ room: this.state.newRoom }, () => { console.log('created new room ', this.state.room) })
    // this.state.room = event.target.value

// add room to array this.state.rooms 
// refreash the dropdown list 

  }

  updateNewRoom (event) {
    this.setState({ newRoom: event.target.value }, () => { console.log(this.state.newRoom) })
  }

  render () {
    // console.log('in render function ' + this.state.toString())
    return (
      <div className='App'>
        <div id='chat-container' />
        <button onClick={() => this.callApi()}>Get Messages</button>
        <div>
          {this.state.messages.filter(message => message.room === this.state.room).map((message, i) => <li key={i}>{(new Date(message.date)).toLocaleString()} ~ {message.text} ~ {message.nick}</li>)}
        </div>
        <form id='sendMessage' onSubmit={this.handleSubmit}>
          <input value={this.state.newMessage} onChange={evt => this.updateNewMessage(evt)} id='messageText' type='text' name='description' placeholder='message...' />
          <button type='submit' value='Submit'>Send</button>
        </form>
        <div>
          <select name='room' id='room-select' room={this.state.value} onChange={this.handleChange}>
            <option value=''>--Select a Room--</option>
            {this.state.rooms.map((room, i) => <option key={i}>{room}</option>)}
          </select>
          <form id='newRoom' onSubmit={this.handleNewRoom}>
            <input value={this.state.newRoom} onChange={evt => this.updateNewRoom(evt)} id='newRoomText' type='text' placeholder='New Room' />
            <button type='submit' value='Submit'>Add Room</button>
          </form>
        </div>
      </div>
    )
  }
}
export default App
