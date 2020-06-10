/* globals fetch */
import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
import Chat from './Chat'
import Home from './Home'
import Login from './Login'
import io from 'socket.io-client'
const socket = io()

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      messages: [],
      user: ''
    }
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

  getRooms () {
    const rooms = this.state.messages.map(msg => msg.room)
    rooms.push(this.state.room) // we have to add the currentRoom to the list, otherwise it won't be an option if there isn't already a message with that room
    const filtered = rooms.filter(room => room) // filter out undefined or empty string
    return Array.from(new Set(filtered)) // filters out the duplicates
  }

  sendMessage (message) {
    socket.emit('chat message', message)
  }

  handleLogin (user, cb) {
    this.setState({ user: user }, cb)
  }

  render () {
    return (
      <div>
        <Switch>
          <Route path='/rooms/:roomname'>
            <Chat
              messages={this.state.messages}
              sendMessage={this.sendMessage.bind(this)}
              nick={this.state.user.username}
            />
          </Route>

          <Route path='/login'>
            <Login handleLogin={this.handleLogin.bind(this)} />
          </Route>

          <Route path='/'>
            <Home rooms={this.getRooms()} />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default App
