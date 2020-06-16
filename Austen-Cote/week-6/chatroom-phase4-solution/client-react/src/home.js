import React from 'react'

// This is a functional component that returns the jsx that is produced on our login page
export default function Home (props) {
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
