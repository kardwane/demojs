/*
 * La doc MDN sur les tableaux JS : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array
 */
const result = document.querySelector("#result")
//! ===============================EXO 1============================== remplir un tableau et dire si ses éléments sont consécutif ou non
/*
let value = 1,
	myArray = [],
	isConsecutif = true,	// pour savoir la saisie est consectutive
	i = 0;

while (value !== 0) {
	//je récupere la valeur utilisateur
	value = parseInt(
		prompt("Donne moi un chiffre (pour arreter la saisie, entrer la valeur 0")
	);
	//je l'ajoute au tableau si valeur différent de 0
	if (value !== 0) myArray.push(value);
	// si on est pas en début ni en fin de saisie, on compare la valeur actuelle à la précedente + 1 pour savoir si on est toujours consecutif ou non
	if (value !== 0 && i !== 0) {
		if(myArray[i] !== myArray[i-1] + 1) isConsecutif = false
	}
	i++
}

//affichage du résultat
result.textContent = (isConsecutif) ? "Consécutif" : "Non consécutif";
*/
//! ===============================EXO 2============================== trier un tableau avec le tri à bulle et le tri par insertion
/*
let myArray = [12, 45, 32, 65, 23, 56, 87, 54, 78]

result.innerHTML = `<p>tableau de départ : </p><p>${myArray.toString()}</p>`

/*
 * version tri par insertion
 * explication de ce tri par une danse : https://www.youtube.com/watch?v=EdIKIf9mHk0&list=PLOmdoKois7_FK-ySGwHBkltzB11snW7KQ&index=1
 */

/*
//pour i de 1 à longueur tableau
for (let i = 1; i < myArray.length; i++) {
	//je copie la valeur en cours
	let currentValue = myArray[i];

	// décaler les éléments de tableau[0] à tableau[i-1] qui sont plus grands que x, en partant de tableau[i-1]
	let j = i;
	// tant que j > 0 et que la valeur précedente est supérieur à la valeur en cours
	while (j > 0 && myArray[j - 1] > currentValue) {
		myArray[j] = myArray[j - 1];
		j--;
	}
	// placer x dans le "trou" laissé par le décalage
	myArray[j] = currentValue
}
*/

/*
 * version tri par à bulle
 * explication de ce tri par une danse : https://www.youtube.com/watch?v=semGJAJ7i74&list=PLOmdoKois7_FK-ySGwHBkltzB11snW7KQ&index=2
 */
/*
let isSorted = false // on pense que le tableau n'est pas trié
while (!isSorted) {
  //tant que le tri n'est pas fini, on continue le tri
  isSorted = true // on pense que le tableau est trié
  for (let i = 0; i < myArray.length - 1; i++) {
    // on vérifie le tri
    if (myArray[i] > myArray[i + 1]) {
      // si ma valeur actuelle > a la valeur suivante du tableau, on inverse et on passe le tableau a "non trié"
      //inversion => cf verre d'eau et de coca a inverser
      let temp = myArray[i]
      myArray[i] = myArray[i + 1]
      myArray[i + 1] = temp
      //tri non fini
      isSorted = false
    }
  }
}
*/

/*
 * version sort() de js : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 */

// myArray.sort((a, b) => a - b) //croissant
// myArray.sort((a, b) => b - a) //décroissant

// result.innerHTML += `<p>tableau trié : </p><p>${myArray.toString()}</p>`

/*
 * la playlist des danse de tri :
 * https://www.youtube.com/playlist?list=PLOmdoKois7_FK-ySGwHBkltzB11snW7KQ
 */

//! ===============================EXO 3============================== remplir un tableau puis inverser les valeurs, les 1er seront les derniers
/*
let myArray = [12, 45, 32, 65, 23, 56, 87, 54, 78]
result.innerHTML = `<p>tableau de départ : </p><p>${myArray.toString()}</p>`

//version manuel
// let arrayResult = []
// // je parcours mon tableau initial, et je créer un nouveau tableau ou j'assine la valeur de tableau initial [taille tableau - i]
// for (let i = 0; i < myArray.length; i++) {
//   arrayResult[i] = myArray[myArray.length - i - 1]
// }
// result.innerHTML += `<p>tableau inversé : </p><p>${arrayResult.toString()}</p>`

//version simple
let arrayResult = []
// je parcours mon tableau initial, et je créer un nouveau tableau ou j'assine la valeur de tableau initial [taille tableau - i]
for (let i = myArray.length; i >= 0; i--) {
  arrayResult.push(myArray[i])
}
result.innerHTML += `<p>tableau inversé : </p><p>${arrayResult.toString()}</p>`

//version js : methode reverse :
// * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
result.innerHTML += `<p>tableau inversé : </p><p>${myArray.reverse()}</p>`
*/
//! ===============================EXO 4============================== supprimer une case de tableau
/*
let myArray = [12, 8, 4, 45, 64, 9, 2]

result.innerHTML = `<p>tableau de départ : </p><p>${myArray.toString()}</p>`

const nb = parseInt(
  prompt("Quel case souhaitez-vous supprimer (1ere case = 0)?")
)

// j'utilise la méthode splice pour supprimer une case identifié de mon tableau : 
// * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/splicev
myArray.splice(nb, 1)

result.innerHTML += `<p>tableau après suppression : </p><p>${myArray.toString()}</p>`
*/

//! ===============================EXO 5============================== chercher un mot dans un tableau
/*
let myArray = [
  "bonjour",
  "formation",
  "développeur",
  "acajoux",
  "loutre",
  "route",
  "avion",
]

const recherche = prompt("Quel mot chechez vous ?")

//version foreach
let isFind = false  // je créer un booléen pour determiner si j'ai trouvé ou non

// je parcours mon tableau
// * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
myArray.forEach((value) => {
	// si je trouve le terme recherché, je passe le booléen a vrai
  if (value === recherche) isFind = true
})

// je n'ai plus qu'a tester en booléen pour en déduire le résultat de la recherche
if (isFind) {
  console.log(`${recherche} trouvé dans ${myArray.toString()}`)
} else {
  console.log(`${recherche} non trouvé dans ${myArray.toString()}`)
}

//version JS
// * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/find
const resultat = myArray.find((mot) => mot === recherche)

if (resultat !== undefined) {
  console.log(`${recherche} trouvé dans ${myArray.toString()}`)
} else {
  console.log(`${recherche} non trouvé dans ${myArray.toString()}`)
}
*/
