/* globals fetch prompt */
import Chat from './chat'
import Rooms from './rooms'
import Home from './home'
import Signup from './signup'
import LoggedOut from './loggedOut'
import React from 'react'
import io from 'socket.io-client'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

const http = require('http')
const socket = io()

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      messages: [],
      room: '',
      formValue: '',
      loggedIn: false,
      username: '',
      password: '',
      token: ''
    }
  }

  componentDidMount () {
    socket.on('chat message', msg => {
      console.log('Got a message:', msg)
      this.setState({ messages: this.state.messages.concat(msg) })
    })

    // Get initial list of messages
  }

  handleLogin (evt) {
    evt.preventDefault()
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    console.log(username, 'this is the username')

    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        this.setState({ token: data.token, username: data.username, loggedIn: true }, () => {
          console.log(this.state, 'this is the states username')
          fetch('/messages', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${this.state.token}`
            }
          })
            .then(response => response.json())
            .then(data => this.setState({ messages: data }))
        }
        )
      })
      // need to pass the token with this it is getting unauthorized
  }

  handleSignUp (evt) {
    evt.preventDefault()
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    fetch('/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ token: data.token, username: data.username, loggedIn: true })
        console.log(this.state)
      })
  }

  handleLogOut () {
    this.setState({ loggedIn: false, username: '' })
  }

  handleSubmit (message) {
    socket.emit('chat message', message)
  }

  getRooms () {
    const rooms = this.state.messages.map(msg => msg.room)
    rooms.push(this.state.room) // we have to add the currentRoom to the list, otherwise it won't be an option if there isn't already a message with that room
    const filtered = rooms.filter(room => room) // filter out undefined or empty string
    return Array.from(new Set(filtered)) // filters out the duplicates
  }

  render () {
    return (
      <Router>
        <div>
          <nav>
            {this.state.loggedIn ? <ul><li><Link to='/'>Back</Link></li><li onClick={this.handleLogOut.bind(this)}><Link to='/logout'>Logout</Link></li></ul> : <ul><li><Link to='/'>Home</Link></li><li><Link to='/login'>Login</Link></li><li><Link to='/signup'>Signup</Link></li></ul>}
          </nav>

          <Switch>
            <Route path='/rooms/:room'>
              <Chat messages={this.state.messages} room={this.state.room} formValue={this.state.formValue} username={this.state.username} token={this.state.token} handleSubmit={this.handleSubmit.bind(this)} />
            </Route>
            <Route path='/login'>
              <Home onHandle={this.handleLogin.bind(this)} />
              {this.state.loggedIn ? <Redirect to='/' /> : null}
            </Route>
            <Route path='/logout'>
              {/* <LoggedOut onHandle = {this.handleLogOut.bind(this)} /> */}
              <LoggedOut />
            </Route>
            <Route path='/signup'>
              <Signup onHandle={this.handleSignUp.bind(this)} />
              {this.state.loggedIn ? <Redirect to='/' /> : null}
            </Route>
            <Route path='/'>
              <Rooms
                loggedIn={this.state.loggedIn}
                username={this.state.username}
                room={this.state.room}
                rooms={this.getRooms()}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App



