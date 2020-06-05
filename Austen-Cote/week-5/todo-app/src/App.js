import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
// eslint-disable-next-line
import { isCompositeComponent } from 'react-dom/test-utils'

function All (props) {
  // console.log(props.todo)
  return <div>
    <h2>All</h2>
    {props.todo.map(todo => <li key={todo}>{todo.item} {todo.completed ? null : <button value={todo} onClick={() => props.handle(todo)}>Done</button>}<button value={todo} onClick={() => props.handleDelete(todo)}>Delete</button></li>)}
         </div>
}

function Todo (props) {
  console.log(props.todo, "todo props")
  const notDone = props.todo.filter(todo => todo.completed === false)
  return <div>
    <h2>Incomplete</h2>
    {notDone.map(todo => <li key={todo}>{todo.item} <button value={todo} onClick={() => props.handle(todo)}>Done</button><button value={todo} onClick={() => props.handleDelete(todo)}>Delete</button></li>)}
             </div>
}

function Done (props) {
  const done = props.todo.filter(todo => todo.completed === true)
  return <div>
    <h2>Complete</h2>
    {done.map(todo => <li key={todo}>{todo.item} <button value={todo} onClick={() => props.handleDelete(todo)}>Delete</button></li>)}
           </div>
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: '',
      value: '',
      todos: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount () {
    fetch('/todos')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        console.log('fetched data from server')
        this.setState({
          todos: data
        })
      })
  }

  handleDelete (todo) {
    console.log('hello', todo)
    const index = this.state.todos.indexOf(todo)
    this.state.todos.splice(index, 1)
    // this.setState(this.state.todos)
    fetch('/todos', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    })
      .then(data => {
        console.log('Success:', data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
      this.setState(this.state.todos)
    // this.setState({ messages: this.state.messages.concat(message) })
    // socket.emit('chat message', message)
    // this.setState({ todos: this.state.todos.concat(items) })
  }

  handleChange (event) {
    this.setState({ value: event.target.value })
    console.log(this.state.value)
  }

  handleSubmit (event) {
    event.preventDefault()
    const items = { item: this.state.value, completed: false }
    console.log(items, 'this is item')
    // this.setState({ todos: this.state.todos.concat(items) })

    fetch('/addTodos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ item: this.state.value, completed: false })
    })
      .then(data => {
        console.log('Success:', data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
    // this.setState({ messages: this.state.messages.concat(message) })
    // socket.emit('chat message', message)
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
              <Todo todo={this.state.todos} handle={this.handleInput.bind(this)} handleDelete={this.handleDelete.bind(this)} />
            </Route>
            <Route path='/done'>
              <Done todo={this.state.todos} handleDelete={this.handleDelete.bind(this)} />
            </Route>
            <Route path='/'>
              <All todo={this.state.todos} handle={this.handleInput.bind(this)} handleDelete={this.handleDelete.bind(this)} />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
