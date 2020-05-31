import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const msgList = [
  { text: 'hello! This is an example message.', date: '2020-05-15T02:05:15.596Z' },
  { text: 'This is another message.', date: '2020-05-15T02:05:15.596Z' },
  { text: 'test post message', date: '2020-05-15T02:05:15.596Z' },
  { text: 'test2', date: '2020-05-15T02:05:15.596Z' }
]

function ShowMessages ({messages}) {
  return (
    <div>
      <ul>
        {messages.map((message, i) =>
          <li key={i}>{message.text}</li>
        )}
      </ul>
    </div>
  )
}

ReactDOM.render(
  <ShowMessages messages={msgList} />,
  document.getElementById('root')
)
