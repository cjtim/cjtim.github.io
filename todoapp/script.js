const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
id = 0
arr = []

function newTodo() {
  let obj = new Object;
  input = prompt('New TODO button clicked!');
  obj = {
    id: id++,
    todos: input,
    checked: false
  }
  arr.push(obj);
  console.log(arr)
  printTodo()
}

function printTodo() {
  newList = document.getElementById('todo-list')
  list.innerHTML = ""
  arr.map((i) => {
    if (i !== undefined){
      let li = document.createElement("LI");
      li.setAttribute("id", `${i.id}`)
      li.innerHTML = `<input type="checkbox" onclick="toggleCheck(${i.id})"/>- ${i.todos}
      <button onclick="removeTodo(${i.id})"class="todo-delete">Delete</button>`
      newList.appendChild(li)
    }
  })
  countTodo()
  countCheck()
}
function removeTodo(id){
  let list = document.getElementById(id);
  list.innerHTML = ''
  delete arr[id]
  countTodo()
  countCheck()
}
function countTodo(){
  let count = 0
  arr.map(i => {
    if (i !== undefined){
      count += 1
    }
  })
  console.log(count)
  itemCountSpan.innerHTML = ''
  itemCountSpan.innerHTML = count
}
function countCheck() {
  let count = 0
  arr.map(i => {
    console.log(i.checked)
    if (i.checked !== true){
      count += 1
    }
  })
  console.log("uncheck is " + count)
  uncheckedCountSpan.innerHTML = ''
  uncheckedCountSpan.innerHTML = count 
}
function toggleCheck(id) {
  arr.filter(i => {
    if (i.id === id){
      i.checked = !i.checked
    }
  })
  countCheck()
}
