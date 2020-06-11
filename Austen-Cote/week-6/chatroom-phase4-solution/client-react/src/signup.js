import React from 'react'

export default function Signup (props) {
  return <div id='chatroom'>
    <h1>Welcome</h1>
    <form onSubmit={props.onHandle}>
      <label>Username</label>
      <input type='text' id='username' />
      <label>Password</label>
      <input type='password' id='password' />
      <input type='submit' value='submit' key='submit' />
    </form>
  </div>
}
