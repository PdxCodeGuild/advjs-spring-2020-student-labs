import React from 'react'
import io from 'socket.io-client'
import { withRouter } from 'react-router'

const socket = io()

function Message (props) {
  return <li className='message-item'>
    <span className='date'>{(new Date(props.message.date)).toLocaleString()}</span>
    <span className='nick'> {props.message.username}: </span>
    <span className='text'>{props.message.text}</span>
         </li>
}

class Chat extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      form: '',
      messages: this.props.messages,
      formValue: '',
      room: ''
    }
  }

  componentDidMount () {
    const room = this.props.match.params.room
    this.setState({ room: room })
  }

  sendMessage (evt) {
    evt.preventDefault()
    const message = { text: this.state.formValue, username: this.props.username, room: this.state.room, date: new Date() }

    socket.emit('chat message', message)
  }

  handleChangeFormInput (evt) {
    this.setState({ formValue: evt.target.value })
  }

  render () {
    return (
      <div id='chatroom'>
        <h1>{this.state.room}</h1>
        <ul id='messages'>
          {this.props.messages.filter(msg => msg.room === this.state.room).map((msg, i) => <Message message={msg} key={i} />)}
        </ul>
        <form id='send-message' onSubmit={this.sendMessage.bind(this)}>
          <input id='message-text' type='text' placeholder='message...' value={this.formValue} onChange={this.handleChangeFormInput.bind(this)} />
          <button type='submit'>Send</button>
        </form>
      </div>
    )
  }
}

export default withRouter(Chat)
