const { createAddHandler } = require('./handlers')
const { Todos } = require('./components')
const yo = require('yo-yo')

const todosContainer = document.getElementById('todos-container')
const addTodo = document.getElementById('add-todo')
const showAll = document.getElementById('show-all')
const showCompleted = document.getElementById('show-completed')
const showIncomplete = document.getElementById('show-incomplete')

const filterCompleted = todo => todo.completed
const filterIncomplete = todo => !todo.completed
const filterAll = _ => true

let filter = filterAll

const todos = [
  { text: 'do the dishes', completed: true },
  { text: 'take out the trash', completed: false }
]

const el = Todos(todos, filter, update)

function getNewTodoText () { return addTodo.children[0].value }
function update () { yo.update(el, Todos(todos, filter, update)) }

// setup handlers
addTodo.onsubmit = createAddHandler(todos, getNewTodoText, update)
showAll.onclick = () => { filter = filterAll; update() }
showCompleted.onclick = () => { filter = filterCompleted; update() }
showIncomplete.onclick = () => { filter = filterIncomplete; update() }

// mount component to the DOM
todosContainer.appendChild(el)
