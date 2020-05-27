const compitem = document.getElementById('compitem')
const body = document.getElementById('body')
const incompitem = document.getElementById('incompitem')

// const yo = require('yo-yo')

//items is a array of obj

// const el = list(items)

// function list (yoitems) {
//   return yo`<ul>
//     ${yoitems.map(function (item, index) {
//       return yo`<li class = ${item.completed ? 'done' : 'todo'}>
//         <span>${item.item}</span>
//         ${item.completed ? '' : yo`<button onclick=${() => document(index)}>Done</button`}
//         </li>`
//     })}
//     </ul>`
// }

// function done (index) {
//   itmes[index].completed = true
//   yo.update(el, list(items))
// }
// function filter (items) {
//   compitem.addEventListener('click', function () {
//     console.log(items, 'comp items')
//     render()
//     const div = document.createElement('div')

//     items.forEach(element => {
//       if (element.completed === true) {
//         const view = document.createElement('ul')
//         const postBody = document.createElement('li')
//         postBody.innerText = element.item
//         view.append(postBody)
//         div.append(view)
//         console.log(element, 'this is element')
//       }
//       body.append(div)
//     })
//     return items
//   })
// }
// function filterNext (items) {
//   incompitem.addEventListener('click', function () {
//     // render()
//     const div = document.createElement('div')

//     items.forEach(element => {
//       if (element.completed === false) {
//         const view = document.getElementById('view')
//         const postBody = document.createElement('li')
//         postBody.innerText = element.item
//         view.append(postBody)
//         div.append(view)
//         console.log(element, 'this is element')
//       }
//       body.append(div)
//     })
//     return items
//   })
// }

// function render () {
//   const clear = document.querySelectorAll('li').value = ''
//   console.log(clear, 'this is clear')
// }

// module.exports = {
//   filter: filter,
//   filterNext: filterNext
// }

