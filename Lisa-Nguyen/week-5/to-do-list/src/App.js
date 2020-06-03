import React from 'react'
import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App () {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>All Tasks</Link>
            </li>
            <li>
              <Link to='/incomplete'>Incompleted Tasks</Link>
            </li>
            <li>
              <Link to='/completed'>Completed Tasks</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/'>
            <All />
          </Route>
          <Route path='/incomplete'>
            <Incomplete />
          </Route>
          <Route path='/completed'>
            <Completed />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function All () {
  return <h2>All Tasks</h2>
}

function Incomplete () {
  return <h2>Incompleted Tasks</h2>
}

function Completed () {
  return <h2>Completed Tasks</h2>
}

export default App
