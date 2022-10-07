//======================= EXO 4.4 ============================
// Declaration des variables
const submitBtn = document.querySelector("#formCopy > button")
// const nbCopy = document.querySelector('#nbCopy')
const nbCopy = document.getElementById("nbCopy")
const resultCopy = document.getElementById("resultCopy")
let copyPrice

//ajouter une action sur le click de mon bouton
submitBtn.addEventListener("click", function (e) {
  // Traitement des données
  e.preventDefault() //eviter de recharcher la page
  console.log(nbCopy.value)
  //calcul du prix
  if (nbCopy.value > 0 && nbCopy.value <= 10) {
    //les 10 premieres a 0,1 € pieces
    copyPrice = nbCopy.value * 0.1
  } else if (nbCopy.value > 10 && nbCopy.value <= 30) {
    //les 20 suivantes a 0,09 € pieces (1€ pour les 10 premieres + reste * 0,09)
    copyPrice = 1 + (nbCopy.value - 10) * 0.09
  } else if (nbCopy.value > 30) {
    //le reste a 0,08 € pieces (2,8€ pour les 30 premieres + reste * 0,08)
    copyPrice = 2.8 + (nbCopy.value - 30) * 0.08
  } else {
    //eviter un prix négatif
    copyPrice = 0
  }
  // Affichage du resultat
  resultCopy.textContent = Math.round(copyPrice) + " €"
})

//======================= EXO 4.5 ============================
//declaration des variables
const radioH = document.querySelector("#homme")
const radioF = document.querySelector("#femme")
const age = document.querySelector("#age")
const resultTax = document.querySelector("#resultTax")
const submitBtnTax = document.querySelector("#formTax > button")

//je lie une action au click de mon bouton imposable?
submitBtnTax.addEventListener("click", function (e) {
  e.preventDefault()

  //tester si imposable
  if (
    (radioH.checked === true && age.value > 20) ||
    (radioF.checked === true && age.value > 18 && age.value <= 35)
  ) {
    resultTax.textContent = "Vous êtes soumis à l'impôt !"
  } else {
    resultTax.textContent = "Vous n'êtes pas soumis à l'impôt !"
  }
})
