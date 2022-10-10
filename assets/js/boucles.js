dResult = document.querySelector("#dResult")
let i = 0 // j'initialise mon compteur à 0
// Tant que mon compteur est plus petit que 10
while (i < 10) {
  // On répète les instructions qui sont entre les accolades.
  dResult.innerHTML += "<p>nous sommes au tour n° " + i + "</p>"
//   dResult.textContent += "<p>nous sommes au tour n° " + i + ".</p>"
  //   dResult.innerHTML += `<p>nous sommes au tour n° ${i} </p>`
  i++ // incremente le compteur (on passe au tour suivant) a = a + 1
}

dResult.innerHTML += "<p>en sortie de boucles, i vaut " + i + "</p>"
// dResult.textContent += "<p>en sortie de boucles, i vaut " + i + ".</p>"

dResult.innerHTML +="<br>===================================<br>"

for(i=30; i<=40; i++){
    dResult.innerHTML += "<p>nous sommes au tour n° " + i + "</p>"
}

dResult.innerHTML += "<p>en sortie de boucles, i vaut " + i + "</p>"
dResult.innerHTML +="<br>==============FIN=============     <br>"
