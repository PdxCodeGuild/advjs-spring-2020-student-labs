import Hello from './hello'
import React from 'react'
import ReactDOM from 'react-dom'

const container = document.getElementById('app-container')

// mount component to the DOM
ReactDOM.render(<Hello name="Ben Bitdiddle" />, container)
