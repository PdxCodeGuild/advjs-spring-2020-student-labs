(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// const utils = require('./add')
// // or const ( add, sub ) = reqiure('./add')

// console.log(utils.add(2, 3))
// console.log(utils.sub(2, 3))
const addTodo = document.getElementById('add-todo')
const todos = document.getElementById('todos')

addTodo.onsubmit = function (evt) {
  evt.preventDefault() // prevents page from refreshing
  const text = addTodo.children[0].value
  todos.appendChild(createTodo(text))
}

function createTodo (text) {
  const todoItem = document.createElement('li')
  const span = document.createElement('span')
  const btn = document.createElement('button')
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  span.innerHTML = text
  btn.innerHTML = "Delete"


  btn.addEventListener("click", function (e) {
    this.parentNode.parentNode.removeChild(this.parentNode)
  })

  todoItem.appendChild(checkbox)
  todoItem.appendChild(span)
  todoItem.appendChild(btn)

  return todoItem
}


},{}]},{},[1]);
