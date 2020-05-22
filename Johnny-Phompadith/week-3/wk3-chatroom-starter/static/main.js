console.log('hello world!')
var yo = require('yo-yo')
const text = document.getElementById('postForm')
const postChat = document.getElementById('postChathtml')
const subBtn = document.getElementById('submitButton')
const viewPost = document.getElementById('viewPost')

postChat.onsubmit = function (evt) {
  evt.preventDefault()
  if (text.nodeValue != '') {
    postMessage(text.value)
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
        yo.update(el, list(data))
    })
}

function list (savedMessages) {
  return yo`<ul>
  ${savedMessages.map(function (savedMsg) {
    return yo`<li>${savedMsg}</li>`
  })}
  </ul>`
}

// create element of blank array
const el = list([])
// appending to DOM div=id viewPost
viewPost.appendChild(el)



// saving username in un
let un = ''
function userName () {
  const span = document.getElementById('user1')
  userIn = prompt("What is your name?")
  var textNode = document.createTextNode(userIn)
  span.appendChild(textNode)
  console.log(userIn)
}
userName()


//  postMessage('posting')
getMessages()

// runs get request timer every 1 sec
// setInterval(getMessages, 1000)
