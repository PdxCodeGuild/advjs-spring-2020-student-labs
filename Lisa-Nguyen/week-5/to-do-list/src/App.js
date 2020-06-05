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

const DelBtn = () => {
  return (
    <>
      <button className='button del'>Delete</button>
    </>
  )
}

const DoneBtn = () => {
  return (
    <>
      <button className='button done'>Done</button>
    </>
  )
}

class App extends React.Component {
  constructor (props) {
    super(props) // creates a new instance of this class
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
    const { taskList } = this.state
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
              <Incomplete taskList={taskList} />
            </Route>
            <Route path='/completed'>
              <Completed taskList={taskList} />
            </Route>
            <Route path='/'>
              <All taskList={taskList} />
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
              {task.completed ? <DelBtn /> : <DoneBtn />}
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
              <DoneBtn />
              <DelBtn />
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
              <DelBtn />
            </li>
        )}
      </ul>
    </div>
  )
}

export default App
