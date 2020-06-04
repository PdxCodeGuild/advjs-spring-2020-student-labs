import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

const taskList = [
  { text: 'Take out the trash', completed: true },
  { text: 'Walk the dog', completed: true },
  { text: 'Wash the dishes', completed: false },
  { text: 'Make rice', completed: true },
  { text: 'make non-toxic cleaner', completed: true },
  { text: 'laundry', completed: false }
]

const Task = ({ text }) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  )
}

const completedBooks = taskList.filter(function (task) {
  return task.completed === true
})

const incompletedBooks = taskList.filter(function (task) {
  return task.completed === false
})

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
          <Route path='/incomplete'>
            <Incomplete tasks={incompletedBooks} />
          </Route>
          <Route path='/completed'>
            <Completed tasks={completedBooks} />
          </Route>
          <Route path='/'>
            <All tasks={taskList} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function All ({ tasks }) {
  return (
    <div>
      <h2>All Tasks</h2>
      {tasks.map(
        (task, i) =>
          <Task key={i} text={task.text} />
      )}
    </div>
  )
}

function Incomplete ({ tasks }) {
  return (
    <div>
      <h2>Incompleted Tasks</h2>
      {tasks.map(
        (task, i) =>
          <Task key={i} text={task.text} />
      )}
    </div>
  )
}

function Completed ({ tasks }) {
  return (
    <div>
      <h2>Completed Tasks</h2>
      {tasks.map(
       (task, i) =>
          <Task key={i} text={task.text} />
      )}
    </div>
  )
}

export default App
