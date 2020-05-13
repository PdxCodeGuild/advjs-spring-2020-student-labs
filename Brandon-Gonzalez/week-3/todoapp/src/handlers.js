//handler and components for the create, and delete functions

function createTodo(todo, render){	
	const text = todo
	//Create the object to be rendered
	const todoItem = document.createElement('li')
	const span = document.createElement('span')
	const delBtn = document.createElement('button')
	const compBtn = document.createElement('button')
	//Assing the inner text and button text
	span.innerHTML = text
	delBtn.innerHTML = 'Delete'
	compBtn.innerHTML = 'Completed'
	//Append to the LI
	todoItem.appendChild(span)
	todoItem.appendChild(delBtn)
	todoItem.appendChild(compBtn)
	return todoItem
}


function deleteHandler(todos, todo, render){
	return function(){
		const index = todos.findIndex(item => item.text === todo.text);
		todos.splice(index,1);
		render(todos)
	}
}

module.exports = {
	createTodo,
	deleteHandler,
}