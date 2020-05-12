const input = document.getElementById('input')
const submit = document.getElementById('submit')
const incomplete = document.getElementById('todo-incomplete')
const complete = document.getElementById('todo-complete')

function add () {
  submit.addEventListener('click', function () {
    // set the todo value from the text box
    const todo = input.value
    // create a div and add a class to it
    const div = document.createElement('todo-item')
    div.classList.add('new-todo')
    // make a li for the post and give it a 
    const postBody = document.createElement('li')
    postBody.innerText = todo
    div.append(postBody)
    // create a checkbox
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.classList.add('checkbox')
    div.append(checkbox)
    // reset the input value
    document.getElementById('input').value = ''
    // add to incomplete
    incomplete.insertBefore(div, incomplete.firstChild)
  })
}

const deleteBtn = document.getElementById('deleteBtn')

function getRid () {
  deleteBtn.addEventListener('click', function () {
    const checkboxGroup = incomplete.querySelectorAll("input[type='checkbox'].checkbox")
    for (let i = 0; i < checkboxGroup.length; i++) {
      if (checkboxGroup[i].checked) {
        checkboxGroup[i].parentElement.remove()
      }
    }
  })
}

const completeBtn = document.getElementById('completeBtn')

function completed () {
  completeBtn.addEventListener('click', function () {
    const checkboxGroup = incomplete.querySelectorAll("input[type='checkbox'].checkbox")
    for (let i = 0; i < checkboxGroup.length; i++) {
      if (checkboxGroup[i].checked) {
        // console.log(checkboxGroup[i].previousSibling)
        complete.append(checkboxGroup[i].previousSibling)
      }
    }
  })
}

module.exports = {
  add: add,
  getRid: getRid,
  completed: completed
}
