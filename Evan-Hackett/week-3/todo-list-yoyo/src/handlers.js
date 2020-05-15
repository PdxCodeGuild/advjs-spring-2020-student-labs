function createDeleteHandler (todos, todo, update) {
  return function () {
    const index = todos.findIndex(item => item.text === todo.text)
    todos.splice(index, 1)
    update()
  }
}

function createDoneHandler (todos, todo, update) {
  return function () {
    const index = todos.findIndex(item => item.text === todo.text)
    todos[index].completed = true
    update()
  }
}

function createAddHandler (todos, getNewTodoText, update) {
  return evt => {
    evt.preventDefault()
    const newTodoText = getNewTodoText()
    todos.push({ text: newTodoText, completed: false })
    update()
  }
}

module.exports = {
  createDeleteHandler,
  createAddHandler,
  createDoneHandler
}
