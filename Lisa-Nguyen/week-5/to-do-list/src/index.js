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
        <button className='button submit'>Submit</button>
      </form>
    ) // end return
  } // end render
}

ReactDOM.render(
  <React.StrictMode>
    <SubmitForm />
    <App />,
  </React.StrictMode>,
  document.getElementById('root')
)
