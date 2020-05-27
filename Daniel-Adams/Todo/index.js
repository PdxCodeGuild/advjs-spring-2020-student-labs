const addTodo = document.getElementById('add-todo')
console.log('Top level')
const todos = document.getElementById('todos')
var filter = 'a'
const all = document.getElementById('all')
all.addEventListener('click', filterTodo)
addTodo.onsubmit = function (evt) {
  evt.preventDefault()
  const text = addTodo.children[0].value

}
function createTodo (text) {
  const todoItem = document.createElement('li')
  const span = document.createElement('span')
  const btn = document.createElement('button')
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  span.innerHTML = text
  btn.innerHTML = 'Delete'
  btn.addEventListener('click', function (e) {
    this.parentNode.parentNode.removeChild(this.parentNode)
  })
  console.log(btn)
  todoItem.appendChild(checkbox)
  todoItem.appendChild(span)
  todoItem.appendChild(btn)
  return todoItem
}

function showAll () {
  // console.log(todos.children)
  var ul = document.getElementById('todos')
  var items = ul.getElementsByTagName('li')
  for (var i = 0; i < items.length; ++i) {
    // do something with items[i], which is a <li> element
  }
}
