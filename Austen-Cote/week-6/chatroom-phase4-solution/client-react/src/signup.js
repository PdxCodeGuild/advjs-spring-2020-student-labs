import React from 'react'

// This is a functional component for sign up, it returns jsx for the Sign up page
export default function Signup (props) {
  return <div id='chatroom'>
    <form onSubmit={props.onHandle}>
      <label>Username:</label>
      <input type='text' id='username' /><br />
      <label>Password:</label>
      <input type='password' id='password' />
      <input type='submit' value='submit' key='submit' />
    </form>
  </div>
}
