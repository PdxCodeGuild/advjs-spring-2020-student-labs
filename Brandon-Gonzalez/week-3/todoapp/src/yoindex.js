const yo = require('yo-yo')

//gets the input from the form
const todoText = document.getElementById('add-todo')

//created todolist variable for storage
const todoList = [
    {text:"hello", completed:"false"},
    {text:"hello world", completed:"false"}
]

const el = createList(todoList);
const addTo= function (evt){
    console.log('here')
    evt.preventDefault()
    let newText = function () {return todoText.value}
    const getTo = new Object()
    getTo.text = newText()
    getTo.completed = false
    console.log(getTo)
    todoList.push(`getTo.text +','+ getTo. )
    createList(todoList)
}

const submitbutton = document.getElementById('submitTo');
submitbutton.addEventListener('click', addTo, false);

//add function. takes the list, maps it, creates elements
function createList(todoList){
    return yo`<ul>
        ${todoList.map((item,index)=> {
        return yo`<li>
            <span>${item.text}</span>
            ${item.completed ? '' : yo`<button onclick=${() => complete(index)}>Complete</button>`}
         </li>`
    })}
    </ul>` 
}

//completed function. takes the click event and changes the list item to completed.
function complete(index){
    todoList[index].completed = true
    yo.update(el, list(todoList))
}

document.getElementById('todos').appendChild(el)