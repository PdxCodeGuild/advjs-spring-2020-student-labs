const yo = require('yo-yo')

console.log('hello world!')

function postMessage (text) {
  console.log('posting message')
  fetch('/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ text: text, date: new Date() })
  })
    .then(data => {
      console.log('Success:', data)
    })
    .catch((error) => {
      console.error('Error:', error)
    })
}

function getMessages () {
  fetch('/messages')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      yo.update(el, list(data))
    })
}

function list (items) {
  console.log(items)
  return yo`<ul>
  ${items.map(function (item) {
    return yo`<li>${item.text}</li>`
  })}
  </ul>`
}
setInterval(function(){ 
  getMessages()
 }, 10000);
getMessages()
const el = list([])
// console.log(el)
document.getElementById('messageHistory').append(el)


// postMessage('hello')

document.getElementById('messageForm').onsubmit = function (e) {
  e.preventDefault()
  const text = document.getElementById('formValue').value

  console.log(text)

  postMessage(text)
}

