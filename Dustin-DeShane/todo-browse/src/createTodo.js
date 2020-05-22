module.exports = function(text) {
  const todoItem = document.createElement('li')
  const span = document.createElement('span')
  // const incomplete = document.getElementById('incomplete')
  const completed = document.getElementById('completed')
  todoItem.classList.add('incomplete')
  span.innerHTML = text

  const delButton = document.createElement('button')
  delButton.innerHTML = 'Delete'
  delButton.onclick = function () {
    todoItem.parentNode.removeChild(todoItem)
  }

  const compButton  = document.createElement('button')
  compButton.innerHTML = 'Mark Complete'
  compButton.onclick = function () {
    todoItem.classList.replace('incomplete', 'complete')
    completed.append(todoItem)
    todoItem.removeChild(compButton)
  }

  todoItem.appendChild(span)
  todoItem.appendChild(delButton)
  todoItem.appendChild(compButton)
  return todoItem
}
