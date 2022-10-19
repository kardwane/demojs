const themeLink = document.querySelector("#theme")
const pageBody = document.querySelector("body")
const addLorem = document.querySelector("#addLorem")
const result = document.querySelector("#result")
const supprimeP = document.querySelector("#supprimeP")
const themeName = document.querySelector(".theme-name")

themeLink.onmouseover = (e) => {
  if (pageBody.classList.contains("dark-mode")) {
    pageBody.classList.remove("dark-mode")
    themeName.textContent = "Dark mode"
  } else {
    pageBody.classList.add("dark-mode")
    themeName.textContent = "Light mode"
  }
  console.log(e.target.id)
}

addLorem.addEventListener("click", function (e) {
  console.log(e.target.id)
  //je créer mon nouvel élément
  let newP = document.createElement("p") // création en mémoire

  //je défini les propriétés
  newP.style = "color:red;"
  newP.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsam vitae nulla facilis possimus molestiae necessitatibus optio ab nesciunt voluptatibus, ratione quasi laborum. Corrupti, beatae odit! Possimus a odio voluptatem."
  //je récupere le dernier paragraphe de la liste
  const lastP =
    document.querySelectorAll("#result p")[
      document.querySelectorAll("#result p").length - 1
    ]

  //je defini l'id
  let newIdP = 0
  if (lastP === undefined) {
    //id 1 si il n'y a pas d'autre paragraphe
    newIdP = 1
  } else {
    //sinon je recupere la parti numérique du dernier paragraphe et je lui ajoute 1
    newIdP = parseInt(lastP.id.substring(4)) + 1
    //PS on peut aussi utiliser une compteur a la place
  }
  newP.id = "newP" + newIdP

  //j'ajoute une action à mon élément
  newP.addEventListener("click", function (e) {
    console.log(e.target.id)
  })

  // une fois prêt, je l'ajoute a mon doument HTML
  result.appendChild(newP)
})

//ajout de l'action de suppression
supprimeP.addEventListener("click", (e) => {
  //je supprime le 1ere element de la liste de paragraphe avec la méthode remove()
  console.log(e.target.id)
  // document.querySelectorAll("#result p")[0].remove()
})
