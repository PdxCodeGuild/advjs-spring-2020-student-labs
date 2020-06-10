import React from 'react'
import {
  useParams,
  Link
} from 'react-router-dom'

function Message (props) {
  return (
    <li className='message-item'>
      <span className='date'>{(new Date(props.message.date)).toLocaleString()}</span>
      <span className='nick'> {props.message.nick}: </span>
      <span className='text'>{props.message.text}</span>
    </li>
  )
}

export default function Chat (props) {
  const { roomname } = useParams()

  return (
    <div id='chatroom'>
      <Link to='/'>Back to Home</Link>
      <h2>{roomname}</h2>
      <ul id='messages'>
        {props.messages.filter(msg => msg.room === roomname).map((msg, i) => <Message message={msg} key={i} />)}
      </ul>
      <ChatForm sendMessage={props.sendMessage} nick={props.nick} room={roomname} />
    </div>
  )
}

class ChatForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      formValue: ''
    }
  }

  handleChange (event) {
    this.setState({ formValue: event.target.value })
  }

  handleSubmit (evt) {
    evt.preventDefault()
    const message = { text: this.state.formValue, nick: this.props.nick, room: this.props.room, date: new Date() }
    this.props.sendMessage(message)
  }

  render () {
    return (
      <form id='send-message' onSubmit={this.handleSubmit.bind(this)}>
        <input id='message-text' type='text' placeholder='message...' value={this.state.formValue} onChange={this.handleChange.bind(this)} />
        <button type='submit'>Send</button>
      </form>
    )
  }
}
