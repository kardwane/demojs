//generation du mot aléatoire
const motCache = choixMotRandom(tabMots);
//création du masque du mot en remplacant les lettres par des *
const motMasque = creerMasquageMot(motCache);
//récupération de l'élement proposition en variable JS
const proposition = document.querySelector('#txtLettre');
/*
la methode querySelector est similaire a getElementById mais
permet de cibler un element avec un selecteur CSS au lieu de l'id
const proposition = document.getElementById('txtLettre');
 */
//récupération de l'élement bouton reset en variable JS
const btnReset = document.querySelector('#btnReset');

//on affecte la methode verifierSaisie() a la saisie clavier
proposition.addEventListener('keyup', function () {
    verifierSaisie(proposition.value, motCache);
});

//on affecte le rechargement de page au click du bouton reset
btnReset.addEventListener('click', function () {
    location.reload();
});

majEtatMot(motMasque);
