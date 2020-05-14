const compitem = document.getElementById('compitem')
const body = document.getElementById('body')
const incompitem = document.getElementById('incompitem')

function filter (items) {
  compitem.addEventListener('click', function () {
    render()
    const div = document.createElement('div')

    items.forEach(element => {
      if (element.completed === true) {
        const view = document.createElement('ul')
        const postBody = document.createElement('li')
        postBody.innerText = element.item
        view.append(postBody)
        div.append(view)
        console.log(element, 'this is element')
      }
      body.append(div)
    })
    return items
  })
}
function filterNext (items) {
  incompitem.addEventListener('click', function () {
    // render()
    const div = document.createElement('div')

    items.forEach(element => {
      if (element.completed === false) {
        const view = document.getElementById('view')
        const postBody = document.createElement('li')
        postBody.innerText = element.item
        view.append(postBody)
        div.append(view)
        console.log(element, 'this is element')
      }
      body.append(div)
    })
    return items
  })
}

function render () {
  const clear = document.querySelectorAll('li').value = ''
  console.log(clear, 'this is clear')
}

module.exports = {
  filter: filter,
  filterNext: filterNext
}

