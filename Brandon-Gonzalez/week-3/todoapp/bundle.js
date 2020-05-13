(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
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






},{"./handlers":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaGFuZGxlcnMuanMiLCJzcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vaGFuZGxlciBhbmQgY29tcG9uZW50cyBmb3IgdGhlIGNyZWF0ZSwgYW5kIGRlbGV0ZSBmdW5jdGlvbnNcblxuZnVuY3Rpb24gY3JlYXRlVG9kbyh0b2RvLCByZW5kZXIpe1x0XG5cdGNvbnN0IHRleHQgPSB0b2RvXG5cdC8vQ3JlYXRlIHRoZSBvYmplY3QgdG8gYmUgcmVuZGVyZWRcblx0Y29uc3QgdG9kb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG5cdGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcblx0Y29uc3QgZGVsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcblx0Y29uc3QgY29tcEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5cdC8vQXNzaW5nIHRoZSBpbm5lciB0ZXh0IGFuZCBidXR0b24gdGV4dFxuXHRzcGFuLmlubmVySFRNTCA9IHRleHRcblx0ZGVsQnRuLmlubmVySFRNTCA9ICdEZWxldGUnXG5cdGNvbXBCdG4uaW5uZXJIVE1MID0gJ0NvbXBsZXRlZCdcblx0Ly9BcHBlbmQgdG8gdGhlIExJXG5cdHRvZG9JdGVtLmFwcGVuZENoaWxkKHNwYW4pXG5cdHRvZG9JdGVtLmFwcGVuZENoaWxkKGRlbEJ0bilcblx0dG9kb0l0ZW0uYXBwZW5kQ2hpbGQoY29tcEJ0bilcblx0cmV0dXJuIHRvZG9JdGVtXG59XG5cblxuZnVuY3Rpb24gZGVsZXRlSGFuZGxlcih0b2RvcywgdG9kbywgcmVuZGVyKXtcblx0cmV0dXJuIGZ1bmN0aW9uKCl7XG5cdFx0Y29uc3QgaW5kZXggPSB0b2Rvcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLnRleHQgPT09IHRvZG8udGV4dCk7XG5cdFx0dG9kb3Muc3BsaWNlKGluZGV4LDEpO1xuXHRcdHJlbmRlcih0b2Rvcylcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0Y3JlYXRlVG9kbyxcblx0ZGVsZXRlSGFuZGxlcixcbn0iLCIvL1JlcXVpcmVzIGhlcmVcbmNvbnN0IHtjcmVhdGVUb2RvLCBkZWxldGVIYW5kbGVyfSA9IHJlcXVpcmUoJy4vaGFuZGxlcnMnKVxuXG4vL0dldHRpbmcgdGhlIGVsZW1lbnRzIG5hZCBhc3NpZ25pbmcgdmFyXG5jb25zdCB0b0RvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvcycpXG5jb25zdCBhZGRUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10b2RvJylcbmNvbnN0IHZpZXdBbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxsQnRuJylcbmNvbnN0IHZpZXdDb21wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBCdG4nKVxuY29uc3Qgdmlld1BlbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGVuZEJ0bicpXG5cbi8vQXJyYXlzIGFuZCBkZWZhdWx0c1xubGV0IHRvZG9MaXN0ID0gW11cblxuXG4vL0dldCB0aGUgdG9kbyB0ZXh0IGZyb20gaW5wdXRcbmZ1bmN0aW9uIGdldE5ld1RvZG8oKXsgcmV0dXJuIGFkZFRvZG8udG9kby52YWx1ZX1cblxuLy9SZW5kZXIgZnVuY3Rpb24sIGNsZWFycyB0aGUgbGlzdCBvbiByZW5kZXIgYW5kIHNob3dzIGZpbHRlciBsaXN0IGl0ZW1zLlxuZnVuY3Rpb24gcmVuZGVyKHRvZG9MaXN0KXtcblx0dG9Eb3MuaW5uZXJIVE1MID0gJydcblx0Y29uc29sZS5sb2codG9kb0xpc3QpXG5cdHRvZG9MaXN0Lm1hcCh0b2RvID0+IGNyZWF0ZVRvZG8odG9kbyx0b2RvTGlzdCxyZW5kZXIpKVxuXHRcdC5mb3JFYWNoKHRvZG8gPT4gdG9Eb3MuYXBwZW5kQ2hpbGQodG9kbykpXG5cbn1cblxuXG4vL0NsaWNrIGFuZCBzdWJtaXQgaGFuZGxlcnNcbmFkZFRvZG8ub25zdWJtaXQgPSBmdW5jdGlvbiAoZXZ0KXtcblx0ZXZ0LnByZXZlbnREZWZhdWx0KClcblx0dG9kb0xpc3QucHVzaChnZXROZXdUb2RvKCkpXG5cdHJlbmRlcih0b2RvTGlzdClcbn1cblxuXG5cblxuXG4iXX0=
