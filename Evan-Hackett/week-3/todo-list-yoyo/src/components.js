const yo = require('yo-yo')
const { createDeleteHandler, createDoneHandler } = require('./handlers')

function Todo (todo, todos, update) {
  return yo`<li class="todo-item">
    <span>${todo.text}</span>
    <button onclick=${createDeleteHandler(todos, todo, update)}>Delete</button>
    ${todo.completed ? '' : yo`<button onclick=${createDoneHandler(todos, todo, update)}>Done</button>`}
  </li>`
}

function Todos (todos, filter, update) {
  return yo`<ul id="todos">
    ${todos.filter(filter).map(todo => Todo(todo, todos, update))}
  </ul>`
}

module.exports = {
  Todo,
  Todos
}
