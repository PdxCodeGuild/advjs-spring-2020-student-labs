//Requires here
const {createTodo, deleteHandler} = require('./handlers')

//Getting the elements nad assigning var
const toDos = document.getElementById('todos')
const addTodo = document.getElementById('add-todo')
const viewAll = document.getElementById('allBtn')
const viewComp = document.getElementById('compBtn')
const viewPend = document.getElementById('pendBtn')

//Arrays and defaults
let todoList = []


//Get the todo text from input
function getNewTodo(){ return addTodo.todo.value}

//Render function, clears the list on render and shows filter list items.
function render(todoList){
	toDos.innerHTML = ''
	console.log(todoList)
	todoList.map(todo => createTodo(todo,todoList,render))
		.forEach(todo => toDos.appendChild(todo))

}


//Click and submit handlers
addTodo.onsubmit = function (evt){
	evt.preventDefault()
	todoList.push(getNewTodo())
	render(todoList)
}





