const themeLink = document.querySelector("#theme")
const pageBody = document.querySelector("body")
const addLorem = document.querySelector("#addLorem")
const result = document.querySelector("#result")
const themeName = document.querySelector(".theme-name")

themeLink.onmouseover = () => {
  if (pageBody.classList.contains("dark-mode")) {
    pageBody.classList.remove("dark-mode")
    themeName.textContent="Dark mode"
  } else {
    pageBody.classList.add("dark-mode")
    themeName.textContent="Light mode"
  }
}

addLorem.addEventListener('click', function(){
  //je défini mon nouvel élément
  let newP = document.createElement('p') // création en mémoire
  newP.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsam vitae nulla facilis possimus molestiae necessitatibus optio ab nesciunt voluptatibus, ratione quasi laborum. Corrupti, beatae odit! Possimus a odio voluptatem."
  newP.id = "newP"+document.querySelectorAll('#result p').length
  newP.style='color:red;'
  // une fois prêt, je l'ajoute a mon doument HTML
  result.appendChild(newP)
})