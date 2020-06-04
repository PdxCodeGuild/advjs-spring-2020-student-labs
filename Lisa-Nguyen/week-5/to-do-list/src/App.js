import React from 'react'
import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

const Task = ({ text, status }) => {
  return (
    <>
      <p>Task: {text}</p>
      <p>Completed: {status}</p>
    </>
  )
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      taskList: [
        { text: 'Take out the trash', completed: true },
        { text: 'Walk the dog', completed: true },
        { text: 'Wash the dishes', completed: false },
        { text: 'Make rice', completed: true },
        { text: 'make non-toxic cleaner', completed: true },
        { text: 'laundry', completed: false },
        { text: 'hang curtain rods', completed: false },
        { text: 'mount bathroom hooks', completed: false }
      ]
    }
  }

  render () {
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
            <Route path='/incomplete'>
              <Incomplete taskList={this.state.taskList} />
            </Route>
            <Route path='/completed'>
              <Completed taskList={this.state.taskList} />
            </Route>
            <Route path='/'>
              <All taskList={this.state.taskList} />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

function All ({ taskList }) {
  return (
    <div>
      <h2>All Tasks</h2>
      <ul>
        {taskList.map(
          (task, i) =>
            <li key={i} className='cardFrame'>
              <Task text={task.text} status={(task.completed.toString())} />
              <button className='button del'>Delete</button>
            </li>
        )}
      </ul>
    </div>
  )
}

function Incomplete ({ taskList }) {
  const incompletedTasks = taskList.filter(function (task) {
    return task.completed === false
  })

  return (
    <div>
      <h2>Incompleted Tasks</h2>
      <ul>
        {incompletedTasks.map(
          (task, i) =>
            <li key={i} className='cardFrame'>
              <Task text={task.text} status={(task.completed.toString())} />
              <button className='button done'>Done</button>
              <button className='button del'>Delete</button>
            </li>
        )}
      </ul>
    </div>
  )
}

function Completed ({ taskList }) {
  const completedTasks = taskList.filter(function (task) {
    return task.completed === true
  })

  return (
    <div>
      <h2>Completed Tasks</h2>
      <ul>
        {completedTasks.map(
          (task, i) =>
            <li key={i} className='cardFrame'>
              <Task text={task.text} status={(task.completed.toString())} />
              <button className='button del'>Delete</button>
            </li>
        )}
      </ul>
    </div>
  )
}

export default App
