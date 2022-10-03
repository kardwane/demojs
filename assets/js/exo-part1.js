//================================ EXO 1 ============================
/*
let a = 1
let b = a + 3
a = 3

//afficher un résultat
console.log(`a vaut ${a} b vaut ${b}`) // backtic ` => altGr + 7 (au dessus de u)
console.log("a vaut " + a + " b vaut " + b) // backtic ` => altGr + 7 (au dessus de u)
console.log("a vaut ${a} b vaut ${b}") // backtic ` => altGr + 7 (au dessus de u)

//================================ EXO 2 ============================
a = 5 // a vaut 5
b = 3 // b vaut 3
c = a + b // 5 + 3 => 8
a = 2 // a ne vaut plus 5 mais bien 2
c = b - a // 3 - 2 => 1 

//afficher un résultat
console.log(`a vaut ${a}, b vaut ${b}, c vaut ${c}`) // backtic ` => altGr + 7 (au dessus de u)

//============================ EXO 6 =======================
// inverser les valeurs de deux variables
let verreCoca = 10;
let verreEau = 5;

console.log("======avant=======");
console.log(`verreCoca vaut ${verreCoca}, verreEau vaut ${verreEau}`) // backtic ` => altGr + 7 (au dessus de u)

let verre3 = verreCoca // je verse le coca dans mon 3eme verre
verreCoca = verreEau  // mon verre de coca est vide? je met l'eau dedans
verreEau = verre3   //mon verre à eau est vide, je peux y verser mon 3eme verre

console.log("======après=======");
console.log(`verreCoca vaut ${verreCoca}, verreEau vaut ${verreEau}`) // backtic ` => altGr + 7 (au dessus de u)
*/

//============================ EXO 7 =======================
// inverser les valeurs de deux variables
let verreCoca = "coca";
let verreEau = "eau";
let verreLait = "lait";

console.log("======avant=======");
console.log(`verreCoca vaut ${verreCoca}, verreEau vaut ${verreEau}, verreLait vaut ${verreLait}`) // backtic ` => altGr + 7 (au dessus de u)

let verre4 = verreEau // je verse l'eau dans mon 3eme verre
verreEau = verreCoca  // mon verre d'eau est vide? je met le coca dedans
verreCoca = verreLait   //mon verre de coca est vide, je peux y verser mon lait
verreLait = verre4  //mon verre de lait est vide, je le rempli avec mon 4eme verre

console.log("======après=======");
console.log(`verreCoca vaut ${verreCoca}, verreEau vaut ${verreEau}, verreLait vaut ${verreLait}`)
