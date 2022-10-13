const result = document.querySelector('#result');
// exo1 demander une chiffre entre 1 et 3
/*
let reponseExo1 = 0;
//tant reponseExo1 <1 ||reponseExo1 >3
while (reponseExo1 < 1 || reponseExo1 > 3) {
    reponseExo1 = parseInt(prompt('Donnez moi un chiffre compris entre 1 et 3'));
}

alert("Vous avez saisi le chiffre "+reponseExo1);
*/

// =================== exo 2 ============================
/*
let reponseExo2 = 0;
//tant reponseExo1 <1 || reponseExo1 >3
while (reponseExo2 < 10 || reponseExo2 > 20) {
    //est ce que la saisie est trop grande ou trop petite
    reponseExo2 = parseInt(prompt('Donnez moi un chiffre compris entre 10 et 20'));
    if(reponseExo2>20){
        alert('plus petit!')
    } 
    if(reponseExo2<10){
        alert('plus grand!')
    } 
}

alert("Vous avez saisi le chiffre "+reponseExo2);
*/

// =================== exo 3 ============================
/*
let reponseExo3 = parseInt(prompt('Donnez moi un chiffre'));
// let reponseExo3 = prompt('Donnez moi un chiffre');
// console.log(typeof reponseExo3);

//je fais une boucle de 10 repétions
for(let i=1; i<=10; i = i +2){ // i++ => i=i+1
    //je calcule le chiffre a afficher
    let chiffre = reponseExo3 + i //mon chiffre est calculer tel que chifffre = valeur saisie + n° de tour
    result.innerHTML = result.innerHTML + "<p>" + chiffre  + " (" + reponseExo3 + " + " + i + ")</p>"
}
*/

// =================== exo 4 ============================
/*
let reponseExo4 = parseInt(prompt('Donnez moi un nombre pour avoir sa table de multiplication'));

/*
//je fais une boucle de 10 repétions
for(let i=1; i<=10; i++){ // i++ => i=i+1
    //je calcule le chiffre a afficher
    let chiffre = reponseExo4 * i //mon chiffre est calculer tel que chifffre = valeur saisie * mon indice (i)
    // result.innerHTML = result.innerHTML + "<p>" + reponseExo4 + " * " + i + " = " +chiffre +")</p>"
    result.innerHTML = result.innerHTML + `<p> ${reponseExo4} * ${i} = ${chiffre}</p>`
}
* /

let i = 1; // condition de départ
while(i<=10){ // condition de sortie
    let chiffre = reponseExo4 * i //mon chiffre est calculer tel que chifffre = valeur saisie * mon indice (i)
    // result.innerHTML = result.innerHTML + "<p>" + reponseExo4 + " * " + i + " = " +chiffre +")</p>"
    result.innerHTML = result.innerHTML + `<p> ${reponseExo4} * ${i} = ${chiffre}</p>` // affichage
    // result.textContent = result.textContent + `<p> ${reponseExo4} * ${i} = ${chiffre}</p>` // affichage
    // innerHTML permet d'ajouter du code HTML à la page
    // textContent ne permet pas d'ajouter du code HTML à la page, il affiche tout en texte classique
    i++// j'augmente le compteur de boucle => condition d'incrementation
}
*/

// =================== exo 5 ============================
/*
let reponseExo5 = parseInt(prompt('Donnez moi un nombre'));
let cumul = 0; // initialise le cumul à 0

// for(let i = 1; i<=reponseExo5; i++){
//     cumul = cumul + i // calcul masqué pour l'utilisateur
//     // cumul+=i // version raccourcie
//     //affichage utilsateur composé du nombre, du + eventuelle
//     result.textContent = result.textContent + `${i}` // affichage nombre
//     if(i<reponseExo5) result.textContent = result.textContent + ' + ' // affichage + 
// }

let i = 1 // initialisation compteur
while (i<=reponseExo5) {
    cumul+=i // version raccourcie
    i++
}

result.textContent = cumul // affichage total pour terminer l'affiche du calcul
*/
// =================== exo 6 ============================
//variables de départ
/*
let reponseExo6 = parseInt(
	prompt("Donnez moi un nombre, je vous donnerai sa factorielle")
);
let total = 1; // initialise le total à 1
// let i = 1; // initialisation compteur à 1

// calcul de factoriel
// while (i <= reponseExo6) {
// 	total *= i; // version raccourcie
// 	// total = total * i
// 	i++; // on passe au tour suivant
// }

for(let i = 1; i<=reponseExo6; i++){
    total = total * i // calcul masqué pour l'utilisateur
    // 	total *= i; // version raccourcie
}

// result.textContent = "La factorielle de " + reponseExo6 + " est " + total; // affichage total pour terminer l'affiche du calcul
result.textContent = `La factorielle de ${reponseExo6} est ${total}`; // affichage total pour terminer l'affiche du calcul
*/

// =================== exo 7 ============================
/*
let valMax = 0, position = 0;

for (let i = 1; i <= 6; i++) {
	let nouvelleValeur = parseInt(prompt("donne moi une valeur"));
    //si ma nouvelle valeur est supérieur a la valeur max, alors je met a jour
    if(nouvelleValeur > valMax){
        valMax = nouvelleValeur // je met ma nouvelle valeur max
        position = i // je mémorise la position
    }
}

console.log(`la valeur est ${valMax}, à la position n°${position}`)
*/

// =================== exo 8 ============================
/*
let valMax = 0,
	position = 1,
	i = 1;
let valeurSaisie = parseInt(prompt("donne moi une valeur"));

while (valeurSaisie !== 0) {
	valeurSaisie = parseInt(prompt("donne moi une valeur"));
	//si ma nouvelle valeur est supérieur a la valeur max, alors je met a jour
	if (valeurSaisie > valMax) {
		valMax = valeurSaisie; // je met ma nouvelle valeur max
		position = i; // je mémorise la position
	}
	i++
}

console.log(`la valeur est ${valMax}, à la position n°${position}`);
*/
// =================== exo 9 ============================
/*
const totalBasket = parseInt(prompt("total de votre panier"));
const cashGiven = parseInt(prompt("Argent donné en caisse"));
let rest = cashGiven - totalBasket,
	bucks10 = 0,
	bucks5 = 0,
	bucks1 = 0;

// tant que le reste a rendre est > à 10€, j'incremente le nombre de billet de 10€
// et de diminue le reste a payer de 10€
while (rest >= 10) {
	rest -= 10;
	bucks10++;
} // en sorti de boucle mon reste à payer est forcement inférieur a 10€

//si mon reste a payer est compris entre 5 et 10
//j'ajoute un billet de 5€ au total a rendre et je diminue le reste à payer de 5
if (rest >= 5) {
	rest -= 5;
	bucks5=1;
}

// a ce niveau là, mon reste a payer et forcement inférieur a 5, 
// il correspond donc au nombre de pieces de 1€ à rendre au client
bucks1 = rest

//Affichage finale
result.textContent = `la caisse vous rend ${cashGiven - totalBasket}€, soit ${bucks10} billet de 10€, ${bucks5} billet de 5€, ${bucks1} piece de 1€, au plaisir de vous revoir chez nous :)`
console.log(rest.textContent);
*/

// =================== exo 10 ============================
/*
//je déclare ma fonction factorielle
function factorielle(nombre) {
    let total = 1;
    //je calcule ma factorielle
	for (let i = 1; i <= nombre; i++) {
        total = total * i; // calcul masqué pour l'utilisateur
		// 	total *= i; // version raccourcie
	}
	//une fois le résultat obtenu, je dois renvoyer le resultat au reste du code
	return total;
}

// je récupere le nombre de chavaux partant et le nombre de chevaux joués
const horsesIn = parseInt(prompt('Combien de chevaux sont alignés au départ?'))
const horsesPlay = parseInt(prompt('Combien de chevaux avez-vous joués?'))

const factoN = factorielle(horsesIn) // n!
const factoP=factorielle(horsesPlay) // p!
const factoNP=factorielle(horsesIn-horsesPlay) // (n-p)!

//x = n!/(n-p)!
const orderChance = factoN/factoNP
//Y = n!/(p!*(n-p)!)
const unorderChance = factoN/(factoP*factoNP)

//affichage du resultat
result.textContent = `Chance de gagné dans l'ordre : 1 chance sur ${orderChance}, dans le désorde : 1 chance sur ${unorderChance}`
console.log(rest.textContent);
*/