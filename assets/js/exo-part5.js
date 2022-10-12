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
