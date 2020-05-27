const { getRid, completed } = require('./todo')
const { filter, filterNext } = require('./filter')

const input = document.getElementById('input')
const submit = document.getElementById('submit')
const incompleteUl = document.getElementById('incomplete-ul')


const items = [
  { item: 'wash dishes', completed: true },
  { item: 'finnish homeowrk', completed: false }
]
getRid(items)
completed(items)
add(items)
filter(items)
filterNext(items)

function add (items) {
  submit.addEventListener('click', function () {
    const Todo = new Object()
    Todo.item = input.value
    Todo.completed = false
    items.push(Todo)
    // console.log(items)

    const postBody = document.createElement('li')
    postBody.innerText = Todo.item

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.classList.add('checkbox')
    postBody.append(checkbox)

    incompleteUl.append(postBody)

    document.getElementById('input').value = ''
    console.log(items, 'add item log')
  })
  return items
}
