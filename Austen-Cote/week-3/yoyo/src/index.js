// const { getRid, completed } = require('./todo')
// const { filter, filterNext } = require('./filter')

const yo = require('yo-yo')

const input = document.getElementById('input')
const submit = document.getElementById('submit')
const compitem = document.getElementById('compitem')
const incompitem = document.getElementById('incompitem')
// const incompleteUl = document.getElementById('incomplete-ul')

const items = [
  { item: 'wash dishes', completed: true },
  { item: 'finnish homeowrk', completed: false }
]

// getRid(items)
// completed(items)
// add(items)
// filter(items)
// filterNext(items)

// const el = add(items)

var el = list(items)
function list (things) {
  console.log(items, 'items')
  return yo`<ul>
    ${things.map(function (item, index) {
      return yo`<li class=${item.completed ? 'done' : 'todo'}>
        <span>${item.item}</span>
        <button class=${item.completed ? 'yes' : 'no'} onclick=${() => changeTrue(index)}>Done</button>
        <button onclick=${() => move(index)}>Delete</button>
      </li>`
    })}
  </ul>`
}

var x = listC(items)
function listC (things2) {
  return yo`<ul>
    ${things2.map(function (item, index) {
      return yo`<li class=${item.completed ? 'done' : 'todo'}>
        <h1>${item.completed ? 'Complete' : 'Incomplete'}</h1>
        <span>${item.item}</span>
        <button onclick=${() => change(index)}>Delete</button>
        </li>`
    })}
    </ul>`
}

// this function changes item completed to true
function changeTrue (index) {
  items[index].completed = true
  console.log(items)
  yo.update(el, list(items))
}

// this function deletes item from itmes
function move (index) {
  items.splice(index, 1)
  yo.update(el, list(items))
  console.log(items)
}
const complist = []
function change (index) {
  complist.splice(index, 1)
  items.splice(index, 1)
  yo.update(el, list(items))
  yo.update(x, listC(complist))
}
compitem.addEventListener('click', function () {
  const complist = []
  items.forEach(item => {
    if (item.completed === true) {
      complist.push(item)
      move(item)
    }
    return complist
  })
  console.log(complist, 'this is comp list btn push')
  yo.update(x, listC(complist))
  // yo.update(el, list(items))
  document.body.appendChild(x)
})

incompitem.addEventListener('click', function () {
  const complist = []
  items.forEach(item => {
    if (item.completed === false) {
      complist.push(item)
    }
  })
  console.log(complist, 'this is comp list btn push')
  yo.update(x, listC(complist))
  // yo.update(el, list(items))
  document.body.appendChild(x)
})

document.body.appendChild(el)

// this handler makes a new object and pushes it to the array
submit.addEventListener('click', function () {
  const Todo = new Object()
  Todo.item = input.value
  Todo.completed = false
  items.push(Todo)
  // console.log(items)
  yo.update(el, list(items))
})

// function add (items) {
//   submit.addEventListener('click', function () {
//     const Todo = new Object()
//     Todo.item = input.value
//     Todo.completed = false
//     items.push(Todo)
//     console.log(items)
//   const postBody = document.createElement('li')
//   postBody.innerText = Todo.item

//   const checkbox = document.createElement('input')
//   checkbox.type = 'checkbox'
//   checkbox.classList.add('checkbox')
//   postBody.append(checkbox)

//   incompleteUl.append(postBody)

//   document.getElementById('input').value = ''
//   console.log(items, 'add item log')
// return items
// }
