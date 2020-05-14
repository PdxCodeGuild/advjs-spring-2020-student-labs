const yo = require('yo-yo')

const todoList = []
let toDo = addTodo(todoList)

function addTodo(todos){
    return yo`<ul>${todos.map((item,index)=>{
        return yo`<li><span>"${item.text}"</span></li>`
    )}
    </ul>` 
    
    })
}

        
        
//         const yo = require('yo-yo')
// const todolist = [
//   { text: 'take out the trash', completed: true },
//   { text: 'do the dishes', completed: false }
// ]
// var el = list(todolist)
// function list (items) {
//   return yo`<ul>
//         ${items.map(function (item, index) {
//           return yo`<li class=${item.completed ? 'done' : 'todo'}>
//         <span>${item.text}</span>
//         ${item.completed ? '' : yo`<button onclick=${() => done(index)}>Done</button>`}
//         </li>`
// })}
// </ul>`
// }
// function done (index) {
//     todolist[index].completed = true
//     yo.update(el, list(todolist))
// }
// document.getElementById('todo-container').appendChild(el)