let reponse = prompt("Donne moi une valeur");
const pos = parseInt(prompt("donne moi un indice à supprimer"));

reponse = reponse.slice(0, pos)+reponse.slice(pos+1, reponse.length);

let maDivTest = document.querySelector("#test");
maDivTest.textContent = reponse;
