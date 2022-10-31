const addBtn = document.querySelector("#addBtn") // bouton ajout
const todolist = document.querySelector("#todolist") //le conteneur de la liste
const todoDesc = document.querySelector("#todoDesc") // l'input d'ajout de tache
const modal = document.getElementById("appModal") // la modal
const span = document.getElementsByClassName("close")[0] // le bouton de fermeture de la modal (X)
const modalYesBtn = document.querySelector("#modalYesBtn")

let todoOldValue = "" // permet de sauvegarder la valeur de la tache avant affichage du form de modif
let todos = ["tâche exemple"] // création du tableau de todo

// action d'ajout de todo
const addTodo = (e) => {
  e.preventDefault()

  //j'ajoute ma todo a mon tableau de todos
  todos.push(todoDesc.value)
  readTodos()
  todoDesc.value = ""
  todoDesc.focus()
}

//liaison de l'action
addBtn.onclick = (e) => addTodo(e) // sur le click du bouton
todoDesc.onkeyup = (e) => {
  // sur la touche entrer du clavier
  if (e.key === "Enter") {
    addTodo(e)
  }
}

// permet d'afficher toutes les taches en attente
const readTodos = () => {
  todolist.innerHTML = ""
  todos.forEach((value, index) => {
    displayTodo(value, index)
  })
}

//se concentre sur l'affichage d'une seule todo
const displayTodo = (todoDesc, todoId) => {
  const todo = document.createElement("article")
  todo.id = "todo" + todoId
  todo.innerHTML = `
  <div class="todo-description">${todoDesc}</div>
  <div class="action-container">
    <i class="fi fi-rs-edit action-icon" onclick="createUpdateTodo(${todoId})"></i>
    <i class="fi fi-rs-check action-icon" onclick="strikeTodo(${todoId})"></i>
    <i class="fi fi-rs-trash action-icon" onclick="showModal(${todoId})"></i>
  </div>`

  todolist.appendChild(todo)
}

//affiche la zone de maj de la todo
const createUpdateTodo = (id) => {
  const todo = document.querySelector("#todo" + id)
  todoOldValue = todo.childNodes[1].textContent
  todo.innerHTML = `
  <input type="text" name="todoDescUpdate" id="todoDescUpdate" value="${todoOldValue}"/>
  <a href="#" onclick="doUpdateTodo(${id})" class="action-container"><i class="fi fi-rs-check action-icon"</a></i>
  `
}

// la mise a jour
const doUpdateTodo = (id) => {
  //on recuper la nouvelle valeur saisie
  const inputValue = document.querySelector("#todoDescUpdate").value
  // si elle est vide alors on ne change rien
  const todoNewValue = inputValue === "" ? todoOldValue : inputValue
  // maj dans le tableau
  todos[id] = todoNewValue
  // refresh des todos
  readTodos()
}

const strikeTodo = (id) => {
  //on recupere la todo choisi
  document
    .querySelector("#todo" + id)
    .childNodes[1].classList.toggle("task-done") // on lui toggle la classe task-done
}

//suppression todo
const removeTodo = (id) => {
  todos.splice(id, 1) //on supprime la todo du tableau
  closeModal() //on ferme la modal
  readTodos() //on raffraichi l'affichage de la liste
}

//afifchage de la modale
const showModal = (id) => {
  modal.style.display = "block"  // grace a un display block
  modalYesBtn.onclick = (id) => removeTodo(id)  // on met la bonne action sur le bouton "oui"
}

//fermture todo
const closeModal = () => {
  modal.style.display = "none"
}

readTodos() // on affiche la todolist par défaut

// ======================= modal ===================

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  closeModal()
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal()
  }
}
