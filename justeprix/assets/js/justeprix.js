// je déclare toutes mes variables
const price = document.querySelector("#price") // recupere la balise input "#price"
const submitBtn = document.querySelector("#submitBtn") //je recupere le bouton "#submitBtn"
const restartBtn = document.querySelector("#restartBtn") //je recupere le bouton "#submitBtn"
const result = document.querySelector("#result") //je recupere le p #result
const tryDone = document.querySelector("#tryDone") //je recupere le p #result

/*
je crée un tableau pour stocker tout les cadeaux disponibles
let monTableau = ["cadeau1", "cadeau2"...] 
let monTableau2 = [12, 34...] 
*/
const giftArray = [
  "une trotinnette",
  "un chameau",
  "une poire à lavement",
  "un pc portable",
  "une voiture thermique avec un bidon d'essence vide",
]

let priceToFind = Math.floor(Math.random() * 100)
let selectedGift = Math.ceil(Math.random() * (giftArray.length - 1)) // prix aléatoire entre 1 et 100
let tryNumber = 0 //initialisation

console.log(priceToFind) // cheat code

function start() {
  /*
Math.random() => genere un chiffre a virgule compris entre 0 et 1 exemple 0,43235345346546565
ensuite on multiplie le chiffre par la valeur max attendu (100 dans notre exemple, car le prix max possible est 100)
mais on obtient toujours un resultat en nombre flotant (a virgule), ex : 23,4578999908908
enfin il faut arrondir ce chiffre pour le convertir entier (Math.floor())
*/
  priceToFind = Math.floor(Math.random() * 100) // prix aléatoire entre 1 et 100
  /*
pour choisir mon n° de cadeau, je genere un entier compris entre 0 
et la taille de mon tableau (tabeau.lenght), cependant je n'oublie pas de faire longueur tableau 
-1 pour prendre en compte le fait que la 1er case d'un tableau (en js, php..)est la case n°0
*/
  selectedGift = Math.ceil(Math.random() * (giftArray.length - 1)) // prix aléatoire entre 1 et 100

  //je créer mon compteur d'essais, en l'initialisant à 0
  tryNumber = 0 //initialisation

  //je remet mon affichage à 0
  result.textContent = ""
  tryDone.textContent = "0 essai"

  console.log(priceToFind) // cheat code
}

//je lui ajoute une action sur l'evenement "click"
//addEventListener permet d'ajouter une action sur un evenement
//ici j'associe une action sur le click de mon bouton
submitBtn.addEventListener("click", function (e) {
  e.preventDefault() // annule le comportement par défaut du formulaire => empeche la soumisson direct du formulaire
  console.log(e)

  //recuperer le prix saisie et le comparer a mon prix mystere
  let inputPrice = parseInt(price.value)

  //je sauvegarde l'historique des message
  resultContent = result.textContent

  if (tryNumber >= 7) {
    result.textContent = "Vous avez perdu!"
  } else {
    if (inputPrice === priceToFind) {
      // j'ajoute un nouveau message à l'historique
      resultContent = `Vous avez gagné le lot suivant : ${giftArray[selectedGift]}`
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

  tryNumber++ // je compte un essai supplémentaire => tryNumber = tryNumber + 1
  tryDone.textContent = tryNumber + " essais"
})

restartBtn.addEventListener("click", function () {
  start()
})
