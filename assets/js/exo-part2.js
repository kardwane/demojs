//ex de la caisse enregistreuse
const prixHT = parseInt(prompt("Quel prix?"))
const nbArticles = parseInt(prompt("Quel nombre d'article?"))
const tauxTVA = parseFloat(prompt("Quel est le taux de TVA (noté 1,taux) ?"))
const prixTTC = prixHT * nbArticles * tauxTVA

console.log(
  `pour un prix HT de ${prixHT}, une quantité de ${nbArticles} produits, et un taux de TVA de ${tauxTVA}, le total est de ${prixTTC} €`
)
