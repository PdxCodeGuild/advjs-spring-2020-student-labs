(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//handler and components for the create, and delete functions

function createTodo(todo, todoList, render){	
	const text = todo
	//Create the object to be rendered
	const todoItem = document.createElement('li')
	const span = document.createElement('span')
	const delBtn = document.createElement('button')
	delBtn.addEventListener('click', deleteTodo(todo, todoList, render))
	const compBtn = document.createElement('button')
	compBtn.addEventListener('click',completeTodo(todo, todoList, render))

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

function completeTodo(todo,todoList, render) {
	return function(){
		const index = todoList.findIndex(item => item.text === todo.text);
		console.log(index)
		todo.fontcolor('red')
		render(todoList)
	}
}


function deleteTodo(todo, todoList, render) {
   	return function(){
   		console.log(todo)
   		console.log('delete')
   		console.log(todoList)
		const index = todoList.findIndex(item => item.text === todo.text);
		console.log(index)
		todoList.splice(index,1);
		render(todoList)
}}



module.exports = {
	createTodo,
	deleteTodo,

}
},{}],2:[function(require,module,exports){
//Requires here
const {createTodo, deleteTodo} = require('./handlers')

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaGFuZGxlcnMuanMiLCJzcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vaGFuZGxlciBhbmQgY29tcG9uZW50cyBmb3IgdGhlIGNyZWF0ZSwgYW5kIGRlbGV0ZSBmdW5jdGlvbnNcblxuZnVuY3Rpb24gY3JlYXRlVG9kbyh0b2RvLCB0b2RvTGlzdCwgcmVuZGVyKXtcdFxuXHRjb25zdCB0ZXh0ID0gdG9kb1xuXHQvL0NyZWF0ZSB0aGUgb2JqZWN0IHRvIGJlIHJlbmRlcmVkXG5cdGNvbnN0IHRvZG9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuXHRjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG5cdGNvbnN0IGRlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5cdGRlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVRvZG8odG9kbywgdG9kb0xpc3QsIHJlbmRlcikpXG5cdGNvbnN0IGNvbXBCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuXHRjb21wQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxjb21wbGV0ZVRvZG8odG9kbywgdG9kb0xpc3QsIHJlbmRlcikpXG5cblx0Ly9Bc3NpbmcgdGhlIGlubmVyIHRleHQgYW5kIGJ1dHRvbiB0ZXh0XG5cdHNwYW4uaW5uZXJIVE1MID0gdGV4dFxuXHRkZWxCdG4uaW5uZXJIVE1MID0gJ0RlbGV0ZSdcblx0Y29tcEJ0bi5pbm5lckhUTUwgPSAnQ29tcGxldGVkJ1xuXG5cdC8vQXBwZW5kIHRvIHRoZSBMSVxuXHR0b2RvSXRlbS5hcHBlbmRDaGlsZChzcGFuKVxuXHR0b2RvSXRlbS5hcHBlbmRDaGlsZChkZWxCdG4pXG5cdHRvZG9JdGVtLmFwcGVuZENoaWxkKGNvbXBCdG4pXG5cdHJldHVybiB0b2RvSXRlbVxufVxuXG5mdW5jdGlvbiBjb21wbGV0ZVRvZG8odG9kbyx0b2RvTGlzdCwgcmVuZGVyKSB7XG5cdHJldHVybiBmdW5jdGlvbigpe1xuXHRcdGNvbnN0IGluZGV4ID0gdG9kb0xpc3QuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS50ZXh0ID09PSB0b2RvLnRleHQpO1xuXHRcdGNvbnNvbGUubG9nKGluZGV4KVxuXHRcdHRvZG8uZm9udGNvbG9yKCdyZWQnKVxuXHRcdHJlbmRlcih0b2RvTGlzdClcblx0fVxufVxuXG5cbmZ1bmN0aW9uIGRlbGV0ZVRvZG8odG9kbywgdG9kb0xpc3QsIHJlbmRlcikge1xuICAgXHRyZXR1cm4gZnVuY3Rpb24oKXtcbiAgIFx0XHRjb25zb2xlLmxvZyh0b2RvKVxuICAgXHRcdGNvbnNvbGUubG9nKCdkZWxldGUnKVxuICAgXHRcdGNvbnNvbGUubG9nKHRvZG9MaXN0KVxuXHRcdGNvbnN0IGluZGV4ID0gdG9kb0xpc3QuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS50ZXh0ID09PSB0b2RvLnRleHQpO1xuXHRcdGNvbnNvbGUubG9nKGluZGV4KVxuXHRcdHRvZG9MaXN0LnNwbGljZShpbmRleCwxKTtcblx0XHRyZW5kZXIodG9kb0xpc3QpXG59fVxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGNyZWF0ZVRvZG8sXG5cdGRlbGV0ZVRvZG8sXG5cbn0iLCIvL1JlcXVpcmVzIGhlcmVcbmNvbnN0IHtjcmVhdGVUb2RvLCBkZWxldGVUb2RvfSA9IHJlcXVpcmUoJy4vaGFuZGxlcnMnKVxuXG4vL0dldHRpbmcgdGhlIGVsZW1lbnRzIG5hZCBhc3NpZ25pbmcgdmFyXG5jb25zdCB0b0RvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvcycpXG5jb25zdCBhZGRUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10b2RvJylcbmNvbnN0IHZpZXdBbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxsQnRuJylcbmNvbnN0IHZpZXdDb21wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBCdG4nKVxuY29uc3Qgdmlld1BlbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGVuZEJ0bicpXG5cbi8vQXJyYXlzIGFuZCBkZWZhdWx0c1xubGV0IHRvZG9MaXN0ID0gW11cblxuXG4vL0dldCB0aGUgdG9kbyB0ZXh0IGZyb20gaW5wdXRcbmZ1bmN0aW9uIGdldE5ld1RvZG8oKXsgcmV0dXJuIGFkZFRvZG8udG9kby52YWx1ZX1cblxuLy9SZW5kZXIgZnVuY3Rpb24sIGNsZWFycyB0aGUgbGlzdCBvbiByZW5kZXIgYW5kIHNob3dzIGZpbHRlciBsaXN0IGl0ZW1zLlxuZnVuY3Rpb24gcmVuZGVyKHRvZG9MaXN0KXtcblx0dG9Eb3MuaW5uZXJIVE1MID0gJydcblx0Y29uc29sZS5sb2codG9kb0xpc3QpXG5cdHRvZG9MaXN0Lm1hcCh0b2RvID0+IGNyZWF0ZVRvZG8odG9kbyx0b2RvTGlzdCxyZW5kZXIpKVxuXHRcdC5mb3JFYWNoKHRvZG8gPT4gdG9Eb3MuYXBwZW5kQ2hpbGQodG9kbykpXG5cbn1cblxuXG4vL0NsaWNrIGFuZCBzdWJtaXQgaGFuZGxlcnNcbmFkZFRvZG8ub25zdWJtaXQgPSBmdW5jdGlvbiAoZXZ0KXtcblx0ZXZ0LnByZXZlbnREZWZhdWx0KClcblx0dG9kb0xpc3QucHVzaChnZXROZXdUb2RvKCkpXG5cdHJlbmRlcih0b2RvTGlzdClcbn1cblxuXG5cblxuXG5cblxuIl19
