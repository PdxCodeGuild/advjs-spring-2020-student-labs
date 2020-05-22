(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
const showDivs = require('./showDivs')
const createTodo = require('./createTodo.js')

const addTodo = document.getElementById('add-todo')
const incomplete = document.getElementById('incomplete')

showDivs()

addTodo.onsubmit = function (evt) {
  evt.preventDefault()
  const text = addTodo.children[0].value
  incomplete.appendChild(createTodo(text))
  addTodo.reset()
}




},{"./createTodo.js":1,"./showDivs":3}],3:[function(require,module,exports){
// Display desired divs

module.exports = function () {
  const allButton = document.getElementById('allButton')
  const completedButton = document.getElementById('completedButton')
  const incompleteButton = document.getElementById('incompleteButton')
  const completedDiv = document.getElementById('completedDiv')
  const incompleteDiv = document.getElementById('incompleteDiv')

  allButton.onclick = function () {
    completedDiv.style.display = 'block'
    incompleteDiv.style.display = 'block'
  }
  completedButton.onclick = function () {
    completedDiv.style.display = 'block'
    incompleteDiv.style.display = 'none'
  }
  incompleteButton.onclick = function () {
    completedDiv.style.display = 'none'
    incompleteDiv.style.display = 'block'
  }
}

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcERhdGEvUm9hbWluZy9ucG0tY2FjaGUvX25weC8zMjYxNi9ub2RlX21vZHVsZXMvd2F0Y2hpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInNyYy9jcmVhdGVUb2RvLmpzIiwic3JjL2luZGV4LmpzIiwic3JjL3Nob3dEaXZzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGV4dCkge1xyXG4gIGNvbnN0IHRvZG9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcclxuICAvLyBjb25zdCBpbmNvbXBsZXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luY29tcGxldGUnKVxyXG4gIGNvbnN0IGNvbXBsZXRlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wbGV0ZWQnKVxyXG4gIHRvZG9JdGVtLmNsYXNzTGlzdC5hZGQoJ2luY29tcGxldGUnKVxyXG4gIHNwYW4uaW5uZXJIVE1MID0gdGV4dFxyXG5cclxuICBjb25zdCBkZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gIGRlbEJ1dHRvbi5pbm5lckhUTUwgPSAnRGVsZXRlJ1xyXG4gIGRlbEJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdG9kb0l0ZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0b2RvSXRlbSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGNvbXBCdXR0b24gID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICBjb21wQnV0dG9uLmlubmVySFRNTCA9ICdNYXJrIENvbXBsZXRlJ1xyXG4gIGNvbXBCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRvZG9JdGVtLmNsYXNzTGlzdC5yZXBsYWNlKCdpbmNvbXBsZXRlJywgJ2NvbXBsZXRlJylcclxuICAgIGNvbXBsZXRlZC5hcHBlbmQodG9kb0l0ZW0pXHJcbiAgICB0b2RvSXRlbS5yZW1vdmVDaGlsZChjb21wQnV0dG9uKVxyXG4gIH1cclxuXHJcbiAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQoc3BhbilcclxuICB0b2RvSXRlbS5hcHBlbmRDaGlsZChkZWxCdXR0b24pXHJcbiAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQoY29tcEJ1dHRvbilcclxuICByZXR1cm4gdG9kb0l0ZW1cclxufVxyXG4iLCJjb25zdCBzaG93RGl2cyA9IHJlcXVpcmUoJy4vc2hvd0RpdnMnKVxyXG5jb25zdCBjcmVhdGVUb2RvID0gcmVxdWlyZSgnLi9jcmVhdGVUb2RvLmpzJylcclxuXHJcbmNvbnN0IGFkZFRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRvZG8nKVxyXG5jb25zdCBpbmNvbXBsZXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luY29tcGxldGUnKVxyXG5cclxuc2hvd0RpdnMoKVxyXG5cclxuYWRkVG9kby5vbnN1Ym1pdCA9IGZ1bmN0aW9uIChldnQpIHtcclxuICBldnQucHJldmVudERlZmF1bHQoKVxyXG4gIGNvbnN0IHRleHQgPSBhZGRUb2RvLmNoaWxkcmVuWzBdLnZhbHVlXHJcbiAgaW5jb21wbGV0ZS5hcHBlbmRDaGlsZChjcmVhdGVUb2RvKHRleHQpKVxyXG4gIGFkZFRvZG8ucmVzZXQoKVxyXG59XHJcblxyXG5cclxuXHJcbiIsIi8vIERpc3BsYXkgZGVzaXJlZCBkaXZzXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBhbGxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxsQnV0dG9uJylcclxuICBjb25zdCBjb21wbGV0ZWRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGxldGVkQnV0dG9uJylcclxuICBjb25zdCBpbmNvbXBsZXRlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luY29tcGxldGVCdXR0b24nKVxyXG4gIGNvbnN0IGNvbXBsZXRlZERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wbGV0ZWREaXYnKVxyXG4gIGNvbnN0IGluY29tcGxldGVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5jb21wbGV0ZURpdicpXHJcblxyXG4gIGFsbEJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29tcGxldGVkRGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICBpbmNvbXBsZXRlRGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgfVxyXG4gIGNvbXBsZXRlZEJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29tcGxldGVkRGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICBpbmNvbXBsZXRlRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICB9XHJcbiAgaW5jb21wbGV0ZUJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29tcGxldGVkRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgIGluY29tcGxldGVEaXYuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuICB9XHJcbn1cclxuIl19
