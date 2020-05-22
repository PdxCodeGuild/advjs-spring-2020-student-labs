const yo = require('yo-yo')

const todosContainer = document.getElementById('todo-container')
const doneContainer = document.getElementById('done-container')
const allButton = document.getElementById('all')
const incompleteButton = document.getElementById('incomplete')
const completedButton = document.getElementById('completed')
const addTodo = document.getElementById('add-todo')
const todoList = []

var el = genList(todoList)
todosContainer.append(el)


addTodo.onsubmit = function (evt) {
  evt.preventDefault()
  const text = addTodo.children[0].value
  todoList.push({ text: text, completed: false })
  addTodo.reset()
  // todosContainer.innerHTML = ''
  // todosContainer.append(genList(todoList))
  yo.update(el, genList(todoList))
}

function genList (items) {
  return yo`<ul>
  ${items.map(function (item, index) {
    return yo`<li>
    <span>${item.text}</span>
    ${item.completed ? '' : yo`<button onclick=${ () => doneFun(index)}>Done</button>`}
    </li>`
  })}
  </ul>`
}

function doneFun (index) {
  todoList[index].completed = true

  yo.update(el, genList(todoList))
}


allButton.onclick = function () {
  console.log('Ran filter')
  todoList.forEach((item) => {
    console.log(item.text)
    if(item.incomplete === true) {
      item.text.style.color = 'green'
      item.text.style.decoration = 'underline'
      todosContainer.append(item)
    }
    else if(item.completed === true) {
      item.text.style.color = 'orange'
      item.text.style.decoration = 'strikethrough'
      todosContainer.append(item)
    }
  })
}

incompleteButton.onclick = function () {
  console.log('Ran filter')
  todoList.forEach((item) => {
    if(item.incomplete === true) {
      item.style.color = 'green'
      item.style.decoration = 'underline'
      todosContainer.append(item)
    }
  })
}

completedButton.onclick = function () {
  console.log('Ran filter')
  todoList.forEach((item) => {
    if(item.completed === true) {
      item.style.color = 'orange'
      item.style.decoration = 'strikethrough'
      doneContainer.append(item)
    }
  })
}