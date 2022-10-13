/*
 * La doc MDN sur les tableaux JS : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array
 */
const result = document.querySelector("#result");
//! ===============================EXO 1============================== remplir un tableau de sept 0
/*
//version 1
let tabtableau = [0, 0, 0, 0, 0, 0, 0]; // créer un tableau remplie de 0

// version 2
// let tableau = []; // créer un tableau vide

// tableau.push(0)
// tableau.push(0)
// tableau.push(0)
// tableau.push(0)
// tableau.push(0)
// tableau.push(0)
// tableau.push(0)

//version 3
// let tableau = []; // créer un tableau vide
// for (let i = 0; i < 7; i++) {
// 	tableau.push(0);
//     //Affichage
// 	console.log(tableau);
// }
*/
//! ===============================EXO 2============================== remplir un tableau avec les voyelles
/*
let tableau = ["a", "e", "i", "o", "u", "y"]; // créer un tableau remplie de voyelles

//v2
// tableau.push("a");
// tableau.push("e");
// tableau.push("i");
// tableau.push("o");
// tableau.push("u");
// tableau.push("y");

//Affichage
console.log(tableau);
*/
//! ===============================EXO 3============================== remplir un tableau de neuf saisie utilisateur
/*
//v1
// let tableau = [
//     parseInt(prompt("renseigner une valeur")),	
//     parseInt(prompt("renseigner une valeur")),	
//     parseInt(prompt("renseigner une valeur")),	
//     parseInt(prompt("renseigner une valeur")),	
//     parseInt(prompt("renseigner une valeur")),	
//     parseInt(prompt("renseigner une valeur")),	
//     parseInt(prompt("renseigner une valeur")),	
//     parseInt(prompt("renseigner une valeur")),	
//     parseInt(prompt("renseigner une valeur"))	
// ];

//v2
let tableau = []; // je déclare un tableau vide

for (let i = 0; i < 9; i++) {
    let valeurSaisie = parseInt(prompt("renseigner une valeur"));
	tableau.push(valeurSaisie);
}

console.log(tableau); // affichage
*/

//! ===============================EXO 4============================== améliorer l'algo donner par l'enoncé
/*
//améliorer l'algo donner par l'enoncé
let gradeArr=[]

for (let i=0; i<9; i++){
    gradeArr.push(i*i) // j'ajoute une case contenant le contenu de la case précédente + 2
    console.log(gradeArr[i]); // affichage
}

*/
//! ===============================EXO 5============================== améliorer l'algo donner par l'enoncé
/*
let myArray=[1] //je déclare un tableau de 1 case contenant la valeur 1
console.log(myArray[0]); //affichage
//je boucle 6 fois pour completer mon tableau
for (let i=1; i<6; i++){
    myArray.push(myArray[i-1]+2) //j'ajoute une case contenant le contenu de la case précédente + 2
    console.log(myArray[i]); //affichage
}
*/
//! ===============================EXO 6============================== améliorer l'algo donner par l'enoncé
/*
let myArray=[1,1] //je déclare un tableau de 2 cases contenant deux fois la valeur 1
console.log(myArray[0],myArray[1]); //affichage

for (let i=2; i<7; i++){
    myArray.push(myArray[i-1]+myArray[i-2]) //j'ajoute une case contenant le contenu de la case précédente + le contenu de la case precedent la précedente
    console.log(myArray[i]); //affichage
}
*/

//! ===============================EXO 7============================== calcul une moyenne de notes
/*
let sum = 0, grades=[];//je créer un total de note à 0 et un tableau vide contenant les notes

//boucle pour récuperer les notes
for (let i = 1; i <= 6; i++) {
    let grade = parseInt(prompt("donne moi une note")); // je récupere une note
    grades.push(grade) // ajoute la note a mon tableau
    sum+=grade // je cumul mes notes dans le total des notes
}

console.log(`la moyene des notes est ${(sum/grades.length).toFixed(2)}`); // j'affiche le résultat (moyenne = total des notes / nombre de notes)
*/
//! ===============================EXO 8============================== determiner le nombre de note positive et négative dans un tableau
/*

let myArray = []; //je déclare un tableau vide
let value = 1; // j'inialise ma variable a 1 (ou n'importe quel valeur numérique autre que 0 pour faire rentrer le programme au moins une fois dans la boucle)

//boucle sur las saisies utilsateur
//v1
let totalPositive = 0;
let totalNegative = 0;
while (value !== 0) {
	//je récupere la valeur utilisateur
	value = parseInt(
		prompt("Donne moi un chiffre (pour arreter la saisie, entrer la valeur 0")
	);
	//je l'ajoute au tableau
	myArray.push(value);
	// valeur positive ou négative? vue la condition, la valeur 0 ne peut etre enregister dans le tableau
	if (value > 0) {
		totalPositive++;
	} else {
		totalNegative++;
	}
}

// j'affiche le résultat (moyenne = total des notes / nombre de notes)
console.log(
	`la total de positif est ${totalPositive}, le total de négatif est ${totalNegative}`
);

// v2
// while (value !== 0) {
// 	//je récupere la valeur utilisateur
// 	value = parseInt(
// 		prompt("Donne moi un chiffre (pour arreter la saisie, entrer la valeur 0")
// 	);
// 	//je l'ajoute au tableau
// 	myArray.push(value);
// }
// //je créer un tableau de positif et de négatif, vue la condition, la valeur 0 ne peut etre enregister dans le tableau
// let arrayPositive = myArray.filter((number) => number > 0);
// let arrayNegative = myArray.filter((number) => number < 0);

// // j'affiche le résultat (j'utilise la méthode .lenght sur les tableaux pour obtenir le nombre de + et de -)
// console.log(
// 	`la total de positif est ${arrayPositive.length}, le total de négatif est ${arrayNegative.length}`
// );
*/

//! ===============================EXO 9============================== :calculer la somme d'un tableau pré rempli
/*
const myArray = [1, 2, 3, 4]; // total prévu => 10

let total = 0;

//v1
// myArray.forEach(function (value) {
// 	total += value;
// });

//v2
// myArray.map((value) => {
// 	total += value;
// 	return total;
// });

//v3
// for(index in myArray){
//     total += myArray[index];
// }

//v4
// for(value of myArray){
//     total += value;
// }

//v5
// total = myArray.reduce(
//     //je recupere les valeur précedente et actuelle pour les additioner
// 	(previousValue, currentValue) => previousValue + currentValue,
// 	0 // valeur de départ du cumul de reduce
// );

//affichage finale
console.log("total du tableau ", myArray, " = ", total);
*/
//! ==========================EXO 10========= :créer un tableau contenant pour chaque case, la somme des valeurs de deux autres tableaux
/*
//les deux tableaux de départ
const array1 = [4, 8, 7, 9, 1, 5, 4, 6];
const array2 = [7, 6, 5, 2, 1, 3, 7, 4];

//le tableau d'arrivé
let array3 = [];

//traitement
for (let i = 0; i < array1.length; i++) {
	array3[i] = array1[i] + array2[i]; // je créer la case n°i et je 
	// array3.push(array1[i] + array2[i]);
}
//affichage du résultat
console.log(array1);
console.log(array2);
console.log("total des deux tableaux");
console.log(array3);
*/

//! ===============================EXO 11============================== : calculer le schtroumpf
/*
//les tableaux de départ
const array1 = [4, 8, 7, 12];
const array2 = [3, 6];

//calcul du schtroumpf
let schtroumpf = 0;

//je fais une double boucle
for (let i = 0; i < array1.length; i++) {
	//la premiere pour parcourir array1
	for (let j = 0; j < array2.length; j++) {
		//la seconde pour parcourir array2
		schtroumpf += array1[i] * array2[j];
	}
}

//résultat
console.log(array1);
console.log(array2);
console.log("le schtroumpf est : ");
console.log(schtroumpf);
*/
//! ===============================EXO 12============================== : saisir un nombre indeterminé de valeur et les augmentées totues les valeurs saisie de 1
/*
let myArray = []; //je déclare un tableau vide
let value = 1; // j'inialise ma variable a 1 (ou n'importe quel valeur numérique autre que 0 pour faire rentrer le programme au moins une fois dans la boucle)

//boucle sur les saisies utilsateur
while (value !== 0) {
	//je récupere la valeur utilisateur
	value = parseInt(
		prompt("Donne moi un chiffre (pour arreter la saisie, entrer la valeur 0")
	);
	//je l'ajoute au tableau
	myArray.push(value+1);
}

myArray.pop() //retire la derniere valeur du tableau (le 0 entré pour arrêter la saisie)

// j'affiche le tableau augmenté de 1
console.log("le nouveau tableau obtenu après augmentation de 1 ", myArray);
*/

//! ===============================EXO 13============================== : saisir un nombre indeterminé de valeur et trouvé la plus grande valeur saisie et sa position dans le tableau
/*
//version simple
//déclaration des variables
let value = 1, //pour récuperer la valeur
	i = 0, // pour gerer le compteur de boucles
	maxValue = 0, //pour stocker la valeur maximum trouvé
	maxPosition = 0; // pour stocker la position de la valeur max

// //tant que la valeur saisie est différent de 0, on continue la saisie
// while (value !== 0) {
// 	//je récupere la valeur utilisateur
// 	value = parseInt(
// 		prompt(
// 			`Donne moi la valeur n°${
// 				i + 1
// 			} (pour arreter la saisie, entrer la valeur 0`
// 		) // ${i+1} permet de rendre l'affichage plus humain (evite de commencer la saisie n°0)
// 	);

// 	//je vérifie si je dois mettre à jour les valeurs max et position max
// 	if (value > maxValue) {
// 		maxValue = value;
// 		maxPosition = i;
// 	}

// 	i++; // incrementation du compteur de saisie
// }

//version tableaux
let myArray = []; //le tableaux contenant les saisies utilisateurs

//tant que la valeur saisie est différent de 0, on continue la saisie
while (value !== 0) {
	//je récupere la valeur utilisateur
	value = parseInt(
		prompt(
			"Donne moi une valeur numérique (pour arreter la saisie, entrer la valeur 0"
		)
	);

	//je l'ajoute au tableau
	myArray.push(value);
}

// je cherche la valeur max et sa position
//version foreach
myArray.forEach((value, index) => {
	if (value > maxValue) {
		maxValue = value;
		maxPosition = index;
	}
});

//version map
// myArray.map((value, index) => {
// 	if (value > maxValue) {
// 		maxValue = value;
// 		maxPosition = index;
// 	}
// 	return maxValue;
// });

//résultat
result.textContent = `La valeur maximale saisie est ${maxValue}, de la case n°${maxPosition}`;
*/

//! ===============================EXO 14============================== : saisir un nombre indeterminé de note, calculer la moyenne et trouvé les notes supérieurs à la moyenne

let sum = 0, // j'initialise le total de note à 0
	grades = [], // j'initialise un tableau vide pour y stocker les notes
	grade = 1, // j'initialise une variable note à 1 (pour gerer la condition de sortie de mon while)
	avg; // je déclare une variable pour stocker la moyenne des notes

//boucle pour récuperer les notes
while (grade !== 0) {
	grade = parseInt(prompt("donne moi une note")); // je récupere une note
	grades.push(grade); // ajoute la note a mon tableau
	sum += grade; // je cumul mes notes dans le total des notes
}

//je retire le dernier 0
grades.pop()

//calcul de la moyenne
avg = (sum/grades.length).toFixed(2) // on limite le résultat a 2 chiffres après la virgule

//========= v1 : manuellement
// //je cherche toutes les valeurs supérieur à la moyenne
// //v1 : boucle for .. of
// result.textContent = `avec une moyenne de ${avg}, les notes supérieurs à la moyenne sont : `
//la boucle for of est utilisé dans cet exemple, mais une boucle for, while, foreach ou encore map peuvent être utilisés en alternative
// for(value of grades){
//     if(value>avg){
//         result.textContent += value+","
//     }
// }

// // je retire la derniere virgule de l'affichage du résultat
// result.textContent = result.textContent.substring(0,result.textContent.lastIndexOf(","))

//============ v2 : avec les filtres
let bestGrades = grades.filter((value) => value > avg);

//affichage
result.textContent = `avec une moyenne de ${avg}, les notes supérieurs à la moyenne sont : `;
result.textContent += bestGrades.toString(); //toString convertit le contenu d'un tableau en chaine de caractere, chaque valeur est séparé par un espace
