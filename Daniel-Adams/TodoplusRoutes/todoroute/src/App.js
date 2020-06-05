import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      todos: [{ todo: 'Walk dog', complete: true },
        { todo: 'Butter Cat', complete: false },
        { todo: 'Reasses life choices', complete: true }]
    }
  }

  render () {
    return (
      <Router>
        <div>
          <nav>
            <span><Link to='/'>All</Link> <Link to='/complete'>Complete</Link> <Link to='/incomplete'>Incomplete</Link></span>
          </nav>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path='/complete'>
              <Complete todos={this.state.todos} />
            </Route>
            <Route path='/incomplete'>
              <Incomplete todos={this.state.todos} />
            </Route>
            <Route path='/'>
              <All todos={this.state.todos} />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App

function All (props) {
  const todos = props.todos
  console.log(todos)
  return (
    <div>
      <ul className='allTodos'> {todos.map((todos, i) => <li key={i}>{todos.todo}<button {todos.complete ? }>Complete</button></li>)}</ul>
    </div>)
}

function Complete (props) {
  const todos = props.todos
  console.log(todos)
  return (
    <div>
      <ul className='completeTodos'> {todos.filter(todos => todos.complete === true).map((todos, i) => <li key={i}>{todos.todo}</li>)}</ul>
    </div>)
}

function Incomplete (props) {
  const todos = props.todos
  console.log(todos)
  return (
    <div>
      <ul className='incompleteTodos'> {todos.filter(todos => todos.complete !== true).map((todos, i) => <li key={i}>{todos.todo}</li>)}</ul>
    </div>)
}
