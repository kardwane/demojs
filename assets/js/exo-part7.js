/*
 * La doc MDN sur les tableaux JS : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array
 */
const result = document.querySelector("#result");
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
let myArray = [12, 45, 32, 65, 23, 56, 87, 54, 78];

result.innerHTML = `<p>tableau de départ : </p><p>${myArray.toString()}</p>`;

// /* 
//  * version tri par insertion
//  * explication de ce tri par une danse : https://www.youtube.com/watch?v=EdIKIf9mHk0&list=PLOmdoKois7_FK-ySGwHBkltzB11snW7KQ&index=1
//  */
// //pour i de 1 à longueur tableau
// for (let i = 1; i < myArray.length; i++) {
// 	//je copie la valeur en cours
// 	let currentValue = myArray[i];

// 	// décaler les éléments de tableau[0] à tableau[i-1] qui sont plus grands que x, en partant de tableau[i-1]
// 	let j = i;
// 	// tant que j > 0 et que la valeur précedente est supérieur à la valeur en cours
// 	while (j > 0 && myArray[j - 1] > currentValue) {
// 		myArray[j] = myArray[j - 1];
// 		j--;
// 	}
// 	// placer x dans le "trou" laissé par le décalage
// 	myArray[j] = currentValue
// }

/* 
 * version tri par à bulle
 * explication de ce tri par une danse : https://www.youtube.com/watch?v=semGJAJ7i74&list=PLOmdoKois7_FK-ySGwHBkltzB11snW7KQ&index=2
 */

let isSorted = false; // on pense que le tableau n'est pas trié
while(!isSorted){	//tant que le tri n'est pas fini, on continue le tri
	isSorted = true; // on pense que le tableau est trié
	for(let i=0; i<myArray.length-1; i++ )	{ // on vérifie le tri
		if(myArray[i]>myArray[i+1]){	// si ma valeur actuelle > a la valeur suivante du tableau, on inverse et on passe le tableau a "non trié"
			//inversion => cf verre d'eau et de coca a inverser
			let temp = myArray[i] 
			myArray[i] = myArray[i+1]
			myArray[i+1] = temp
			//tri non fini
			isSorted = false
		}
	}
}

result.innerHTML += `<p>tableau trié : </p><p>${myArray.toString()}</p>`;

/*
* la playlist des danse de tri : 	
* https://www.youtube.com/playlist?list=PLOmdoKois7_FK-ySGwHBkltzB11snW7KQ
*/

//! ===============================EXO 3============================== remplir un tableau de neuf saisie utilisateur

//! ===============================EXO 4============================== améliorer l'algo donner par l'enoncé

//! ===============================EXO 5============================== améliorer l'algo donner par l'enoncé
