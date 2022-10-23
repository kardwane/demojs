const addBtn = document.querySelector("#addBtn")
const todolist = document.querySelector("#todolist")
const todoDesc = document.querySelector("#todoDesc")
const modal = document.querySelector("#appModal");
const closeModalSpan = document.querySelector("#closeModalSpan");
const closeModalBtn = document.querySelector("#closeModalBtn");


let todoOldValue = ""
let todos = ["tâche exemple"]

addBtn.onclick = (e) => {
    e.preventDefault()

    //j'ajoute ma to-do a mon tableau de todos
    todos.push(todoDesc.value)
    readTodos()
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
}

//affiche la zone de maj de la to-do
const createUpdateTodo = (id) => {
    const todo = document.querySelector("#todo" + id)
    todoOldValue = todo.childNodes[1].textContent
    todo.innerHTML = `
  <label for="todoDesc">
  Description de la Tâche
  </label>
  <input type="text" id="todoDescUpdate" />
    <a href="#" onclick="doUpdateTodo(${id})"><img class="action-icon" src="./assets/img/validate.png" alt="validate"></a>
  `
    // gère la maj sur la touche "entrer" du clavier
    document.querySelector("#todoDescUpdate").onkeyup=(e)=>{
        if (e.key === "Enter") doUpdateTodo(id)
    }
}

const doUpdateTodo = (id) => {
    const inputValue = document.querySelector("#todoDescUpdate").value
    todos[id] = inputValue === "" ? todoOldValue : inputValue
    readTodos()
}

const strikeTodo = (id) => {
    document
        .querySelector("#todo" + id)    // je selectionne la tâche concernée
        .childNodes[1].classList.toggle("task-done")    // pour lui faire inverser la classe task-done
}

const removeTodo = (id) => {
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
