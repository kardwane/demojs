<<<<<<< HEAD
const addBtn = document.querySelector("#addBtn") // bouton ajout
const todolist = document.querySelector("#todolist") //le conteneur de la liste
const todoDesc = document.querySelector("#todoDesc") // l'input d'ajout de tache
const modal = document.getElementById("appModal") // la modal
const span = document.getElementsByClassName("close")[0] // le bouton de fermeture de la modal (X)
const modalYesBtn = document.querySelector("#modalYesBtn")
=======
const addBtn = document.querySelector("#addBtn")
const todolist = document.querySelector("#todolist")
const todoDesc = document.querySelector("#todoDesc")
const modal = document.querySelector("#appModal");
const closeModalSpan = document.querySelector("#closeModalSpan");
const closeModalBtn = document.querySelector("#closeModalBtn");

>>>>>>> 579fb8edc7af1b807666e955536e7b27d8ab162e

let todoOldValue = "" // permet de sauvegarder la valeur de la tache avant affichage du form de modif
let todos = ["tâche exemple"] // création du tableau de todo

<<<<<<< HEAD
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
=======
addBtn.onclick = (e) => {
    e.preventDefault()

    //j'ajoute ma to-do a mon tableau de todos
    todos.push(todoDesc.value)
    readTodos()
>>>>>>> 579fb8edc7af1b807666e955536e7b27d8ab162e
}

// permet d'afficher toutes les taches en attente
const readTodos = () => {
    todolist.innerHTML = ""
    // todos.forEach((value, index) => {
    //   displayTodo(value, index)
    // })
    todos.map((value, index) => {
        displayTodo(value, index)
        return value;
    })
}

<<<<<<< HEAD
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
=======
//se concentre sur l'affichage d'une seule to-do
const displayTodo = (todoDesc, todoId) => {
    const todo = document.createElement("article")
    todo.classList.add('fadein')
    todo.id = "todo" + todoId
    todo.innerHTML = `
  <div id="todoDescription">${todoDesc}</div>
  <div>
      <a href="#" onclick="createUpdateTodo(${todoId})"><img class="action-icon" src="./assets/img/edit.png" alt="update"></a>
      <a href="#" onclick="strikeTodo(${todoId})"><img class="action-icon" src="./assets/img/validate.png" alt="strike"></a>
      <a href="#" onclick="popupModal(${todoId})"><img class="action-icon" src="./assets/img/delete.png" alt="remove"></a>
      </div>
      `
    todolist.appendChild(todo)
    document.querySelector("#todoDescription").onclick=()=>createUpdateTodo(todoId)   //active la maj sur le click
>>>>>>> 579fb8edc7af1b807666e955536e7b27d8ab162e
}

//affiche la zone de maj de la to-do
const createUpdateTodo = (id) => {
<<<<<<< HEAD
  const todo = document.querySelector("#todo" + id)
  todoOldValue = todo.childNodes[1].textContent
  todo.innerHTML = `
  <input type="text" name="todoDescUpdate" id="todoDescUpdate" value="${todoOldValue}"/>
  <a href="#" onclick="doUpdateTodo(${id})" class="action-container"><i class="fi fi-rs-check action-icon"</a></i>
=======
    const todo = document.querySelector("#todo" + id)
    todoOldValue = todo.childNodes[1].textContent
    todo.innerHTML = `
  <label for="todoDesc">
  Description de la Tâche
  </label>
  <input type="text" id="todoDescUpdate" />
    <a href="#" onclick="doUpdateTodo(${id})"><img class="action-icon" src="./assets/img/validate.png" alt="validate"></a>
>>>>>>> 579fb8edc7af1b807666e955536e7b27d8ab162e
  `
    // gère la maj sur la touche "entrer" du clavier
    document.querySelector("#todoDescUpdate").onkeyup=(e)=>{
        if (e.key === "Enter") doUpdateTodo(id)
    }
}

// la mise a jour
const doUpdateTodo = (id) => {
<<<<<<< HEAD
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
=======
    const inputValue = document.querySelector("#todoDescUpdate").value
    todos[id] = inputValue === "" ? todoOldValue : inputValue
    readTodos()
}

const strikeTodo = (id) => {
    document
        .querySelector("#todo" + id)    // je selectionne la tâche concernée
        .childNodes[1].classList.toggle("task-done")    // pour lui faire inverser la classe task-done
>>>>>>> 579fb8edc7af1b807666e955536e7b27d8ab162e
}

//suppression todo
const removeTodo = (id) => {
<<<<<<< HEAD
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
=======
    const todo = document.querySelector("#todo"+id)
    todo.classList.remove('fadein')
    todo.classList.add('fadeout')
    closeModal() // ferme la modal
    setTimeout(()=>{
        //on supprime la to-do du tableau
        todos.splice(id, 1)
        //on rafraichit l'affichage de la liste
        readTodos()
    },2000)

}

const popupModal = (id) => {
    // ouverture de la modal pour avoir la confirmation de suppression
    modal.style.display = "block";
    document.querySelector('#deleteConfirm').onclick = () => removeTodo(id)
}

const closeModal = () => {
    modal.style.display = "none";
}

//========== section modal ============

// on gère la fermeture de la modal par le span ou le bouton "non"
closeModalBtn.onclick = () => closeModal()
closeModalSpan.onclick = () => closeModal()

// on ferme modal si l'utilisateur click en dehors de la fenêtre
window.onclick = function (event) {
    if (event.target === modal) modal.style.display = "none";
}

//========== end section ==============

// on affiche la todolist par défaut
readTodos()
>>>>>>> 579fb8edc7af1b807666e955536e7b27d8ab162e
