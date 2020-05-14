// handler and components for the create, and delete functions

function createTodo (todo, todoList, render) {
  const text = todo
  // Create the object to be rendered
  const todoItem = document.createElement('li')
  const span = document.createElement('span')
  const delBtn = document.createElement('button')
  delBtn.addEventListener('click', deleteTodo(todo, todoList, render))
  const compBtn = document.createElement('button')
  compBtn.addEventListener('click', completeTodo(todo, todoList, render))

  // Assign the inner text and button text
  span.innerHTML = text
  span.className = 'incomplete'
  delBtn.innerHTML = 'Delete'
  compBtn.innerHTML = 'Completed'

  // Append to the LI
  todoItem.appendChild(span)
  todoItem.appendChild(delBtn)
  todoItem.appendChild(compBtn)
  return todoItem
}

function completeTodo (todo, todoList, render) {
  return function () {
    const index = todoList.findIndex(item => item.text === todo.text)
    console.log(index)
    todo.fontcolor('red')
    render(todoList)
  }
}

function deleteTodo (todo, todoList, render) {
   	return function () {
   		console.log(todo)
   		console.log('delete')
   		console.log(todoList)
    const index = todoList.findIndex(item => item.text === todo.text)
    console.log(index)
    todoList.splice(index, 1)
    render(todoList)
  }
}

module.exports = {
  createTodo,
  deleteTodo

}
