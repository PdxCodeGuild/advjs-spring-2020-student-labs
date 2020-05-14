// const utils = require('./add')
// // or const ( add, sub ) = reqiure('./add')

// console.log(utils.add(2, 3))
// console.log(utils.sub(2, 3))
const addTodo = document.getElementById('add-todo')
const todos = document.getElementById('todos')
var checkboxes = document.querySelectorAll('input[type=checkbox]')
var submit = document.getElementById('completeTodo')


addTodo.onsubmit = function (evt) {
  evt.preventDefault() // prevents page from refreshing
  const text = addTodo.children[0].value
  todos.appendChild(createTodo(text))
}

function createTodo (text) {
  const todoItem = document.createElement('li')
  const span = document.createElement('span')
  const btn = document.createElement('button')
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.id = 'checkbox'
  span.innerHTML = text
  btn.innerHTML = 'Delete'

  btn.addEventListener('click', function (e) {
    this.parentNode.parentNode.removeChild(this.parentNode)
  })


  todoItem.appendChild(checkbox)
  todoItem.appendChild(span)
  todoItem.appendChild(btn)

  return todoItem
}


function getChecked () {
  var checked = []

  for (var i = 0; i < checkboxes.length; i++) {
    var checkbox = checkboxes[i]
    if (checkbox.checked) checked.push(checkbox.value)
  }
  return checked
}

submit.addEventListener('click', function () {
  var checked = getChecked()
  console.log(checked)
  return checked
})