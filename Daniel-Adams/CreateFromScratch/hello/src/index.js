import Hello from './hello'
import yo from 'yo-yo'

const container = document.getElementById('app-container')

const el = Hello('Who names their kid Ben Bitdiddle?')

// mount component to the DOM
container.appendChild(el)
