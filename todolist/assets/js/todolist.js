const addBtn = document.querySelector("#addBtn")
const todolist = document.querySelector("#todolist")
const todoDesc = document.querySelector("#todoDesc")
const todoCounter = 1

let todoOldValue = ""
let todos = ["tâche exemple"]

addBtn.onclick = (e) => {
  e.preventDefault()

  //j'ajoute ma todo a mon tableau de todos
  todos.push(todoDesc.value)
  readTodos()
}

// permet d'afficher toutes les taches en attente
const readTodos = () => {
  todolist.innerHTML = ""
  todos.forEach((value, index) => {
    displayTodo(value, index)
  })
}

//se concentre sur l'afficahge d'une seule todo
const displayTodo = (todoDesc, todoId) => {
  const todo = document.createElement("article")
  todo.id = "todo" + todoId
  todo.innerHTML = `
  <div class="todo-description">${todoDesc}</div>
  <div>
      <a href="#" onclick="createUpdateTodo(${todoId})"><img class="action-icon" src="./assets/img/edit.png"></a>
      <a href="#" onclick="strikeTodo(${todoId})"><img class="action-icon" src="./assets/img/validate.png"></a>
      <a href="#" onclick="removeTodo(${todoId})"><img class="action-icon" src="./assets/img/delete.png"></a>
      </div>
      `
  todolist.appendChild(todo)
}

//affiche la zone de maj de la todo
const createUpdateTodo = (id) => {
  const todo = document.querySelector("#todo" + id)
  todoOldValue = todo.childNodes[1].textContent
  todo.innerHTML = `
  <label for="todoDesc">
  Description de la Tâche
  <input type="text" name="todoDescUpdate" id="todoDescUpdate" />
  </label>
    <a href="#" onclick="doUpdateTodo(${id})"><img class="action-icon" src="./assets/img/validate.png"></a>
  `
}

const doUpdateTodo = (id) => {
  const inputValue = document.querySelector("#todoDescUpdate").value
  const todoNewValue = inputValue === "" ? todoOldValue : inputValue

  todos[id] = todoNewValue

  readTodos()
}

const strikeTodo = (id) => {
  document
    .querySelector("#todo" + id)
    .childNodes[1].classList.toggle("task-done")
}

const removeTodo = (id) => {
  //on supprime la todo du tableau
  todos.splice(id, 1)
  //on raffraichi l'affichage de la liste
  readTodos()
}

// on affiche la todolist par défaut
readTodos()
