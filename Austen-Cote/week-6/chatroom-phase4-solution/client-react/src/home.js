import React from 'react'

export default function Home (props) {
  return <div id='chatroom'>
    <h1>Welcome</h1>
    <form onSubmit={props.onHandle}>
      <label>Username</label>
      <input type='text' id='nickname' />
      <label>Password</label>
      <input type='password' />
      <input type='submit' value='submit' key='submit' />
    </form>
  </div>
}
