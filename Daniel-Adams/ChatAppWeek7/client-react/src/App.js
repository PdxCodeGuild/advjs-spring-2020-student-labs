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

const socket = io()

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      messages: [],
      username: '',
      room: '',
      formValue: '',
      loggedIn: false,
      token: {}
    }
  }

  componentDidMount () {
    socket.on('chat message', msg => {
      this.setState({ messages: this.state.messages.concat(msg) })
    })

    // Get initial list of messages
    // fetch('/messages')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log('fetched data from server')
    //     this.setState({ messages: data })
    //   })
  }

  handleLogin (evt) {
    evt.preventDefault()
    const username = document.getElementById('nickname').value
    const password = document.getElementById('password').value

    console.log('**user info**', username, password)

    // this.setState({
    //   username: username,
    //   password: password,
    //   loggedIn: true
    // })

    fetch('/signup', {
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
        console.log('Data after post:', data)
        this.setState({
          username: username,
          loggedIn: true,
          token: data.token
        })
      })
  }

  handleLogOut () {
    this.setState({ loggedIn: false, username: '' })
  }

  sendMessage (message) {
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
              <Chat
                messages={this.state.messages}
                room={this.state.room}
                formValue={this.state.formValue}
                username={this.state.username}
                token={this.state.token}
                sendMessage={this.sendMessage.bind(this)}
              />
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
              <Signup onHandle={this.handleLogin.bind(this)} />
              {this.state.loggedIn ? <Redirect to='/' /> : null}
            </Route>
            <Route path='/'>
              <Rooms
                loggedIn={this.state.loggedIn}
                username={this.state.username}
                room={this.state.room}
                rooms={this.getRooms()}
                token={this.state.token}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
