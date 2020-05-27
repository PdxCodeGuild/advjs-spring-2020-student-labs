var yo = require('yo-yo')

const todolist = [
  { text: 'Walk the dog', completed: true },
  { text: 'Butter the cat', completed: false }
]

var el = list(todolist)

var el = list(todolist)
function list (items) {
  return yo`<ul>
    ${items.map(function (item, index) {
      return yo`<li class=${item.completed ? 'done' : 'todo'}>
        <span>${item.text}</span>
        ${item.completed ? '' : yo`<button onclick=${() => done(index)}>Done</button>`}
      </li>`
    })}
  </ul>`
}
function done (index) {
  todolist[index].completed = true
  yo.update(el, list(todolist))
}
const additem = document.getElementById('additem')
additem.onsubmit = function (evt) {
  evt.preventDefault()
  const text = additem.children[0].value
  todolist.push({ text: text, completed: false })
  yo.update(el, list(todolist))
}

document.getElementById('todo-items').appendChild(el)
