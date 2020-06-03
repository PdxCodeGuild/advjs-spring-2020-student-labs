import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

class SubmitForm extends React.Component {
  render () {
    return (
      <form>
        <input
          type='text'
          className='input'
          placeholder='Enter Item'
        />
        <button className='button'>Submit</button>
      </form>
    ) // end return
  } // end render
}

ReactDOM.render(
  <React.StrictMode>
    <App />,
    <SubmitForm />
  </React.StrictMode>,
  document.getElementById('root')
)
