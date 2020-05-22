console.log('hello world!')

const yo = require('yo-yo')

const showMessages = document.getElementById('showMessages')
const text = document.getElementById('message-to-send')
const theForm = document.getElementById('post-message')
const subBtn = document.getElementById('subBtn')

theForm.onsubmit = function(evt) {
  evt.preventDefault()
  if(text.value != '') {
    postMessage(text.value)
  }
  theForm.reset()
}

// function autoRefresh(t) {
//   setTimeout(getMessages(), t)
// }

// var refresh = autoRefresh(10000)


function postMessage (text) {
  console.log('posting message')
  fetch('/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: text
  })
    .then(data => {
      console.log('Success:', data)
    })
    .catch((error) => {
      console.error('Error:', error)
    })}

function getMessages () {
  fetch('/messages')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      data = data.map( (message) => JSON.parse(message) )
      showMessages.appendChild(loadMessages(data))
    })
}


function loadMessages (messageArr) {
  console.log(messageArr)

  return yo`<ul>
  ${messageArr.map((message, index) => {
    return yo`<li>
    <span class="message">${message.text}</span><span class="time">${message.date}</span>
    </li>`
    
  })}</ul>`
}


// postMessage(text)
