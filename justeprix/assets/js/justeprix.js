// je déclare toutes mes variables
const price = document.querySelector("#price") // recupere la balise input "price"
const submitBtn = document.querySelector("#submitBtn") //je recupere le bouton type submit
const result = document.querySelector("#result") //je recupere le bouton type submit
const priceToFind = Math.floor(Math.random() * 100) // prix aléatoire entre 1 et 100
const giftArray= ["une trotinnette", "un chameau", "une poire à lavement", "un pc portable", "une voiture thermique avec un bidon d'essence vide"]
const selectedGift = Math.ceil(Math.random() * (giftArray.length - 1)) // prix aléatoire entre 1 et 100

let tryNumber = 0

console.log(priceToFind)

//je lui ajoute une action sur l'evenement "click"
submitBtn.addEventListener("click", function (e) {
  e.preventDefault() // annule le comportement par défaut du formulaire => empeche la soumisson direct du formulaire

  tryNumber++ // je compte un essai supplémentaire

  //recuperer le prix saisie et le comparer a mon prix mystere
  let inputPrice = parseInt(price.value)

  //je sauvegarde l'historique des message
  resultContent = result.textContent

  if (tryNumber >= 7) {
    result.textContent = "Vous avez perdu!"
  } else {
    if (inputPrice === priceToFind) {
      // j'ajoute un nouveau message à l'historique
      resultContent =
        `Vous avez gagné le lot suivant : ${giftArray[selectedGift]}`

    } else if (inputPrice < priceToFind) {
      // j'ajoute un nouveau message à l'historique
      resultContent += ", Plus grand!"
    } else {
      // j'ajoute un nouveau message à l'historique
      resultContent += ", Plus petit!"
    }
    //afficher le nouvel historique
    result.textContent = resultContent
  }
})
