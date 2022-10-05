// generer un prix caché compris entre 1 et 100

// sur le click du boutton, comparer la saisie utilisateur avec le prix caché
let price = document.querySelector("#price") // recupere la balise input "price"

//je recupere le bouton type submit
let submitBtn = document.querySelector("#submitBtn")

//je lui ajoute une action sur l'evenement "click"
submitBtn.addEventListener("click", function (e) {
  e.preventDefault() // annule le comportement par défaut du formulaire => empeche la soumisson direct du formulaire
//   alert("vous proposer " + price.value)
  //a faire, créer le code pour tester si le prix proposer est bon, et si non informer l'utilisateur si le prix est trop haut ou trop bas
})
