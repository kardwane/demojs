const addBtn = document.querySelector("#addBtn")
const todolist = document.querySelector("#todolist")
const todoTitle = document.querySelector("#todoTitle")
const todoDesc = document.querySelector("#todoDesc")
const todoCounter = 1


addBtn.onclick=(e)=>{
    e.preventDefault()
    //Création de la to-do
    const todo = document.createElement('article')
    todo.id = "todo"+todoCounter
    todo.innerHTML = `<h3>${todoTitle.value}</h3><p>${todoDesc.value}</p>`

    //ajout de la to-do
    todolist.appendChild(todo)
}