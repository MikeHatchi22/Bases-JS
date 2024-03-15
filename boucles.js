//Créez un script qui parcourt les nombres de 1 à 10 et affiche si un nombre est pair ou impair.

const number = 10 
for (let i = 0; i <= number; i++) {
    if (i % 2 === 0) {
        console.log(i + " est pair.");
    } else {
        console.log(i + " est impair.");
    }
}

const chiffre = [1,2,3,4,5,6];
let somme = 0

for (let i = 0; i < chiffre.length; i++) {
    somme += chiffre[i]
}
console.log("La somme des nombres est : " + somme);