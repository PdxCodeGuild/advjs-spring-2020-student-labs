import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { isCompositeComponent } from 'react-dom/test-utils'

function All (props) {
  // console.log(props.todo)
  return <div>
    <h2>All</h2>
    {props.todo.map(todo => <li key={todo}>{todo.item} {todo.completed ? null : <button value={todo} onClick={() => props.handle(todo)}>Done</button>}</li>)}
         </div>
}

function Todo (props) {
  console.log(props.todo, "todo props")
  const notDone = props.todo.filter(todo => todo.completed === false)
  return <div>
    <h2>Incomplete</h2>
    {notDone.map(todo => <li key={todo}>{todo.item} <button value={todo} onClick={() => props.handle(todo)}>Done</button></li>)}
             </div>
}

function Done (props) {
  const done = props.todo.filter(todo => todo.completed === true)
  return <div>
    <h2>Complete</h2>
    {done.map(todo => <li key={todo}>{todo.item}</li>)}
           </div>
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: '',
      value: '',
      todos: [{ item: 'wash dishes', completed: true },
        { item: 'finnish homeowrk', completed: false }]
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({ value: event.target.value })
    console.log(this.state.value)
  }

  handleSubmit (event) {
    event.preventDefault()
    const items = { item: this.state.value, completed: false }
    console.log(items, 'this is item')
    this.setState({ todos: this.state.todos.concat(items) })
  }

  handleInput (todo) {
    const change = todo
    // find element and modify its value
    // this.state.todos[]
    // you can use index of to find the index of what you are trying to find insted
    this.state.todos.find(todo => todo.item === change.item).completed = true
    this.setState({ todos: this.state.todos })
    // console.log(this.state.todos)
  }

  render () {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>All</Link>
              </li>
              <li>
                <Link to='/todo'>Todo</Link>
              </li>
              <li>
                <Link to='/done'>Done</Link>
              </li>
            </ul>
          </nav>
          <form id='form-sub' onSubmit={this.handleSubmit}>
            <textarea id='todo-item' value={this.state.value} onChange={this.handleChange} placeholder='Add a TODO' />
            <button type='submit'>ADD</button>
          </form>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path='/todo'>
              <Todo todo={this.state.todos} handle={this.handleInput.bind(this)} />
            </Route>
            <Route path='/done'>
              <Done todo={this.state.todos} />
            </Route>
            <Route path='/'>
              <All todo={this.state.todos} handle={this.handleInput.bind(this)} />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
