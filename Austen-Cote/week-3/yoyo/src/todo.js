// const incomplete = document.getElementById('todo-incomplete')
// const complete = document.getElementById('todo-complete')

// const deleteBtn = document.getElementById('deleteBtn')

// function getRid (items) {
//   deleteBtn.addEventListener('click', function () {
//     const checkboxGroup = incomplete.querySelectorAll("input[type='checkbox'].checkbox")
//     for (let i = 0; i < checkboxGroup.length; i++) {
//       if (checkboxGroup[i].checked) {
//         checkboxGroup[i].parentElement.remove()
//         const completeItem = checkboxGroup[i].previousSibling.textContent

//         items.forEach((todo, index) => {
//           if (completeItem === todo.item) {
//             // console.log(todo, 'this is todo')
//             items.splice(index, 1)
//             // console.log(items)
//           }
//         })
//       }
//     }
//     console.log(items, 'remove item log')
//   })
//   return items
// }

// const completeBtn = document.getElementById('completeBtn')

// function completed (items) {
//   completeBtn.addEventListener('click', function () {
//     const checkboxGroup = incomplete.querySelectorAll("input[type='checkbox'].checkbox")
//     for (let i = 0; i < checkboxGroup.length; i++) {
//       if (checkboxGroup[i].checked) {
//         const completeItem = checkboxGroup[i].previousSibling.textContent

//         items.forEach(todo => {
//           if (completeItem === todo.item) {
//             todo.completed = true
//             // console.log(todo, 'todo')
//             // complete.append(checkboxGroup[i].previousSibling)
//           }
//         })
//         checkboxGroup[i].parentElement.remove()
//         // console.log(items)
//       }
//     }
//     console.log(items, 'completed log')
//   })
//   return items
// }

// module.exports = {
//   // add: add,
//   getRid: getRid,
//   completed: completed
// }
