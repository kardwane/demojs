// je déclare tute mes variables
const priceToFind = Math.floor(Math.random() * 100); // generer un prix caché compris entre 1 et 100
const form = document.querySelector("#submitBtn")
const price = document.querySelector("#price") // recupere la balise input "price"
const submitBtn = document.querySelector("#submitBtn")
const result = document.querySelector("#result") // recupere la balise #result

//je recupere le bouton type submit
const submitBtn = document.querySelector("#submitBtn")
let triesLeft = 7 //compteur d'erreur

//je lui ajoute une action sur l'evenement "click"
submitBtn.addEventListener("click", function (e) {
  e.preventDefault() // annule le comportement par défaut du formulaire => empeche la soumisson direct du formulaire
  
  if( parseInt(price.value) >= priceToFind){

  }

})
