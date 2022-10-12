//factorielle
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

//je récupere une valeur a calculer
// let factorielle5 = prompt('Donne moi un nombre, je te donnerai sa factorielle')
//affcicher le résultat
console.log(`la factorielle de 5 est : ${factorielle(5)}`);
console.log(`la factorielle de 10 est : ${factorielle(10)}`);
console.log(`la factorielle de 3 est : ${factorielle(3)}`);


// let factorielleP = factorielle(parseInt(prompt('donner nombre de chevaux')))
/*
const btnSubmit1 = document.querySelector("#form1>button")
const form2 = document.querySelector("#form2")
const input1 = document.querySelector("#form1>input")
const input2 = document.querySelector("#form2>input")
const presult = document.querySelector("#presult")

const doubleValue = (number) => {
  presult.textContent = number * 2
}

btnSubmit1.addEventListener("click", function (e) {
  e.preventDefault()
  doubleValue(input1.value)
})

form2.addEventListener("submit", function (e) {
  e.preventDefault()
  doubleValue(input2.value)
})
*/
