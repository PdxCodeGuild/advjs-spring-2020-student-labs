import React from 'react'

function App () {
  return (
    <div className='App'>
      <h1>Hello</h1>
    </div>
  )
}

// fetch('/hello')
//   .then(response => response.json())
//   .then(data => console.log(data))

fetch('/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    username: 'bob',
    password: '123'
  })
})
  .then(response => response.json())
  .then(data => {
    console.log(data)
    fetch('/hello-protected', {
      headers: {
        Authorization: `Bearer ${data.token}`
      }
    })
      .then(response => response.json())
      .then(data => console.log(data))
  })

export default App
