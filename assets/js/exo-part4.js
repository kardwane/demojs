// //======================= EXO 4.4 ============================
// // Declaration des variables
// const submitBtn = document.querySelector("#formCopy > button")
// // const nbCopy = document.querySelector('#nbCopy')
// const nbCopy = document.getElementById("nbCopy")
// const resultCopy = document.getElementById("resultCopy")
// let copyPrice

// //ajouter une action sur le click de mon bouton
// submitBtn.addEventListener("click", function (e) {
//   // Traitement des données
//   e.preventDefault() //eviter de recharcher la page
//   console.log(nbCopy.value)
//   //calcul du prix
//   if (nbCopy.value > 0 && nbCopy.value <= 10) {
//     //les 10 premieres a 0,1 € pieces
//     copyPrice = nbCopy.value * 0.1
//   } else if (nbCopy.value > 10 && nbCopy.value <= 30) {
//     //les 20 suivantes a 0,09 € pieces (1€ pour les 10 premieres + reste * 0,09)
//     copyPrice = 1 + (nbCopy.value - 10) * 0.09
//   } else if (nbCopy.value > 30) {
//     //le reste a 0,08 € pieces (2,8€ pour les 30 premieres + reste * 0,08)
//     copyPrice = 2.8 + (nbCopy.value - 30) * 0.08
//   } else {
//     //eviter un prix négatif
//     copyPrice = 0
//   }
//   // Affichage du resultat
//   resultCopy.textContent = Math.round(copyPrice) + " €"
// })

// //======================= EXO 4.5 ============================
// //declaration des variables
// const radioH = document.querySelector("#homme")
// const radioF = document.querySelector("#femme")
// const age = document.querySelector("#age")
// const resultTax = document.querySelector("#resultTax")
// const submitBtnTax = document.querySelector("#formTax > button")

// //je lie une action au click de mon bouton imposable?
// submitBtnTax.addEventListener("click", function (e) {
//   e.preventDefault()

//   //tester si imposable
//   if (
//     (radioH.checked === true && age.value > 20) ||
//     (radioF.checked === true && age.value > 18 && age.value <= 35)
//   ) {
//     resultTax.textContent = "Vous êtes soumis à l'impôt !"
//   } else {
//     resultTax.textContent = "Vous n'êtes pas soumis à l'impôt !"
//   }
// })

// //======================= EXO 4.6 ============================
// const candidat1 = document.querySelector("#candidat1")
// const candidat2 = document.querySelector("#candidat2")
// const candidat3 = document.querySelector("#candidat3")
// const candidat4 = document.querySelector("#candidat4")
// const resultElection = document.querySelector("#resultElection")
// const submitBtnElec = document.querySelector("#submitBtnElec")

// //verifier les scores
// //methode alternative d'association d'une action au click de mon bouton
// submitBtnElec.onclick = (e) => {
//   // function(e){}
//   e.preventDefault()

//   //gagné
//   if (candidat1.value > 50) {
//     resultElection.textContent = "Vous élu au 1er tour"
//   } else if (
//     candidat2.value > 50 ||
//     candidat3.value > 50 ||
//     candidat4.value > 50 ||
//     candidat1.value < 12.5
//   ) {
//     //perdu
//     resultElection.textContent = "Battu au premier tour"
//   } else if (
//     candidat1.value > candidat2.value &&
//     candidat1.value > candidat3.value &&
//     candidat1.value > candidat4.value
//   ) {
//     //2eme tour favorable
//     resultElection.textContent = "ballotage favorable"
//   } else {
//     //2eme tour défavorable
//     resultElection.textContent = "ballotage défavorable"
//   }
// }

//======================= EXO 4.7 ============================
const age = document.querySelector("#age")
const xpPermis = document.querySelector("#xpPermis")
const nbAccident = document.querySelector("#nbAccident")
const xpClient = document.querySelector("#xpClient")
const resultAssurance = document.querySelector("#resultAssurance")
const submitBtnElec = document.querySelector("#submitBtnAssurance")

// exemple controle de saisie
// if (age.value <18 || age.value > 100){
//   alert('mauvais age pour être assuré')
// }

// lier une action au click de mon bouton
submitBtnElec.addEventListener("click", function (e) {
  let score = 0
  e.preventDefault() // on empeche le rechargemnt de la page
  //traitement des infos
  if (age.value < 25) {
    score++
  }
  if (xpPermis.value <= 2) {
    score++
  }
  if (xpClient.value > 1) {
    score--
  }
  score += parseInt(nbAccident.value)

  switch (score) {
    case -1:
      resultAssurance.textContent = "tarif bleue"
      break
    case 0:
      resultAssurance.textContent = "tarif vert"
      break
    case 1:
      resultAssurance.textContent = "tarif orange"
      break
    case 2:
      resultAssurance.textContent = "tarif rouge"
      break
    default:
      resultAssurance.textContent = "refusé (danger publique)"
      break
  }
})
