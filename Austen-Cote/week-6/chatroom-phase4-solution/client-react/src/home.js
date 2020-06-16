import React from 'react'

// This is a functional component that returns the jsx that is produced on our login page
export default function Home (props) {
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
