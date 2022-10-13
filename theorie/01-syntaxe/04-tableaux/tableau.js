/*
 * les tableaux
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array
 */
// déclaration simple
let tableau = ["a suprimer", "texte", 15, true, "toto", "lorem"]

// récuperer la valeur d'une case
let array1 = [5, 12, 8, 130, 44]
let index = 2
console.log(tableau[index]) // classique => nous donne 15
console.log(array1[index]) // classique => nous donne 8

// .at(index) version
// positive index start from left
console.log(
  `Using an index of ${index} the item returned is ${array1.at(index)}` // on obtient 8 là aussi
)
// expected output: "Using an index of 2 the item returned is 8"

index = -2 // negative index start from right and the 0 has not be count!!!!!
console.log(`Using an index of ${index} item returned is ${array1.at(index)}`)
// expected output: "Using an index of -2 item returned is 130"

// ajouter un element en fin de tableau
tableau.push("nouvelle valeur")
tableau = [...tableau, "autre nouvelle valeur"]
console.log(tableau)

// ajouter un element en début de tableau
tableau = ["nouvelle 1ere valeur", ...tableau]
console.log(tableau)

// retirer le dernier element du tableau
tableau.pop()
console.log(tableau)

// retirer le premier element du tableau
tableau.shift()
console.log(tableau)

// modifier une valeur dans un tableau (ex case n°2)
// tableau[index] = valeur
tableau[1] = 30 // la numeration commence à 0 d'ou le -1
console.log(tableau)

// supprimer une case de mon tableau
tableau.splice(2, 1) // supprime 1 case à partir de la case index 2 (autrement dit, suppression de la case n°3)
console.log(tableau)

// la copie de tableau
let tableauCopy = tableau
tableauCopy = [...tableau] // alternative

// parcourir un tableau
// foreach((case, index)=>{ traitement a effectuer sur la case})
let contenuTableau = ""
tableauCopy.forEach((item, index) => {
  contenuTableau +=
    " la case n°" + index + " contient la valeur " + item + "<br/>"
})

// ou map((case, index)=>{ traitement a effectuer sur la case})
// on préfera la méthode map à foreach pour les performances (map plus rapide que foreach)
contenuTableau += "==================================<br/>"
tableau.map((item, index) => {
  contenuTableau +=
    " la case n°" + index + " contient la valeur " + item + "<br/>"
  return contenuTableau
})

//boucle for .. of, interessant pour lister le contenu seul d'un tableau
for(let valeurCase of tableau){
  /* for of fonctionne comme for in mais au lieu de récupérer à chaque itération
  l'index, il récupère directement les valeurs des tableaux. */
  console.log(valeurCase);
}

//boucle for ... in
for(let indiceCase in tableau){
  /* le for in va récupérer les index des différents éléments du tableau 
  si le tableau contient 3 élément, le for in fera 3 itérations 
  sa variable valant à tour de rôle 0, 1 puis 2.*/
  console.log(indiceCase, " -> ", tableau[indiceCase]);
}

document.querySelector("#result").innerHTML = contenuTableau

// assigné des variables depuis un tableau (spread operator)
// par exemple avec le tableau [1,3,5]
// on peut obtenir a=1, b=3, c=3 en faisant
tableau = [1, 3, 5]
const [a, b, c] = tableau
console.log(a, b, c) // affichera 1, 3, 5

// la concaténation de tableaux en JS
const tab1 = [1, 2, 3]
const tab2 = [4, 5]

let tab3 = tab1.concat(tab2)
tab3 = [...tab1, ...tab2] // alternative => [1, 2, 3, 4, 5]

// trouver la valeur numérique la plus élevé dans un tableau
console.log(Math.max(...tab3)) // 5

// trouver la valeur numérique la plus élevé dans un tableau
console.log(Math.min(...tab3)) // 1

// le filtrage de tableau
const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"]
const numArr = [1,45,23,89,56,78,45,12]
const resultNum = numArr.filter((num)=>num>50) // [89,56,78]
const result = words.filter((word) => word.length > 6)
console.log(result, resultNum)
// expected output: Array ["exuberant", "destruction", "present"]
// filter () renvoi un array

// La méthode find() renvoie la valeur du premier élément trouvé dans le tableau qui respecte la condition donnée
array1 = [5, 12, 8, 130, 44]
const found = array1.find((element) => element > 10)
console.log(found)
// expected output: 12

// bonus : petit easter egg js
console.log("ba" + +"a" + "a")
