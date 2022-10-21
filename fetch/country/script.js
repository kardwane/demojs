const url = "https://restcountries.com/v3.1/name/peru";

fetch(url).then(handleFetch); // je lis les reponses de l'URL et j'execute l'action handleFetch

function handleFetch(responseText) {
	console.log(responseText);
	// La propriété ok est un boolean indiquant si cela s'est bien passé ou non.
	if (responseText.ok) {
		// si le parse fonctionne, il lancera le callback de then
		// sinon ce sera le callback de catch
		responseText
			.json() // transforme la réponse API au format JSON
			.then(displayCountryInfo) // des que les données sont au bon format, on affcihe les infos du pays
			.catch((error) => console.log(error)); // permet d'attraper l'erreur pour l'afficher en console 'evite le message d'erreur par défaut
	} else {
		console.log(responseText.statusText);
	}
}

//déclaration de fonction "moderne" (fléché)
const displayCountryInfo = (data) => {
	console.log(data);
	//nom du pays
	document.querySelector("#nomPays").textContent = data[0].name.common;
	//sa population
	document.querySelector("#population").textContent =
		data[0].population + " habitants";

	//Ses pays frontalier
	let paysFrontalier = "";
	data[0].borders.forEach((value, index) => {
		paysFrontalier += `${value} (${index}), `;
	});

	//retire la dernier virgule
	paysFrontalier = paysFrontalier.substring(0, paysFrontalier.length - 2);

	document.querySelector("#frontalier").textContent = paysFrontalier;
};
