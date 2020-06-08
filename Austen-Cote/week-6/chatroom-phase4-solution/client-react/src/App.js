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
      nick: '',
      room: '',
      formValue: '',
      loggedIn: false
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

  handleLogin (evt) {
    evt.preventDefault()
    const nick = document.getElementById('nickname').value
    console.log(nick, 'this is the nickname')
    this.setState({ nick: nick, loggedIn: true })
  }

  handleLogOut () {
    this.setState({ loggedIn: false, nick: '' })
  }

  getRooms() {
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
              {this.state.loggedIn ? <ul><li><Link to='/'>Back</Link></li><li onClick={this.handleLogOut.bind(this)}><Link to='/logout'>Logout</Link></li></ul> : <ul><li><Link to='/'>Home</Link></li><li><Link to='/login'>Login</Link></li><li><Link to='/signup'>Signup</Link></li></ul> }
          </nav>

          <Switch>
            <Route path='/rooms/:room'>
              <Chat messages={this.state.messages} room={this.state.room} formValue={this.state.formValue} nick={this.state.nick} />
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
                nick={this.state.nick}
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


