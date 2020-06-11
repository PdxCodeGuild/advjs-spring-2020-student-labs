import React from 'react'
import {
  useHistory
} from 'react-router-dom'

export default function Login (props) {
  const history = useHistory()
  return <div id='auth'>
    <form id='loginForm' onSubmit={(evt) => { history.push('/chat'); props.handleLoginClick(evt) }}>
      <input type='text' id='username' placeholder='Enter Username' />
      <button type='submit'>Login</button>
    </form>
  </div>
}
