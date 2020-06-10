import React from 'react';
import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client'
const socket = io()

socket.on('chat message', msg => {
  console.log('Got a message:', msg)
  // updateState('messages', state.messages.concat(msg))
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
