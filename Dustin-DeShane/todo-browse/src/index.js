const showDivs = require('./showDivs')
const createTodo = require('./createTodo.js')

const addTodo = document.getElementById('add-todo')
const incomplete = document.getElementById('incomplete')

showDivs()

addTodo.onsubmit = function (evt) {
  evt.preventDefault()
  const text = addTodo.children[0].value
  incomplete.appendChild(createTodo(text))
  addTodo.reset()
}



