console.log('hello world!')
var yo = require('yo-yo')
const viewPost = document.getElementById('viewPost')
const text = document.getElementById('postChat')
const postChat = document.getElementById('postChathtml')
const subBtn = document.getElementById('submitButton')

postChat.onsubmit = function (evt) {
  evt.preventDefault()
  if (text.nodeValue != '') {
    postMessage(text.value)
    viewPost.appendChild(getMessages())
    console.log(text)
  } postChat.reset()
}

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
      data.forEach(element => {
        let listMsg = document.createElement('li')
        listMsg.append(element)
        document.getElementById('viewPost').appendChild(listMsg)
      })
    })
}

//  postMessage('posting')

getMessages()
