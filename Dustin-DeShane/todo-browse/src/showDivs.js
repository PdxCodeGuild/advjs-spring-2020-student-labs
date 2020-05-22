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
