//le si simple
const a = 10

// if (a > 0) {
//   console.log("a est positif")
// }

//le si sinon (if/else)

if (a > 0) {
  console.log("a est positif")
} else {
  console.log("a est nulle ou négatif")
}

console.log("================================")

//variante de if else
let resultat = "a est nulle ou négatif" // je force une des deux réponse en resultat
//je test la condition
if (a > 0) {
  resultat = "a est positif"
}
console.log(`${resultat}`)

//le if ternaire
resultat = a > 0 ? "a est positif" : "a non positif"

console.log("================================")
console.log(`${resultat}`)

// le if condition multiple ET
const b = 6

if (a == 10 && b == 5) {
  console.log("a vaut 10 et b vaut 5")
} else {
  console.log("comparaison échoué")
}

// le if condition multiple OU (altGr + 6 => |)
if (a == 10 || b == 5) {
  console.log("au moins a vaut 10 ou b vaut 5")
} else {
  console.log("comparaison échoué")
}
