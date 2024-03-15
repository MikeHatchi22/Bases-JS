//Créez une page HTML et utilisez JavaScript pour afficher "Hello world!" dans la console.

console.log ("Hello World")

//Créez un script qui parcourt les nombres de 1 à 10 et affiche si un nombre est pair ou impair.

const number = 10 
for (let i = 0; i <= number; i++) {
    if (i % 2 === 0) {
        console.log(i + " est pair.");
    } else {
        console.log(i + " est impair.");
    }
}

//Écrivez une fonction qui prend deux nombres comme arguments et retourne leur somme (exemple: 4 x 5 = 20)

function arg (x, y) {
    const result = (x * y);
    return result;
}

const result = (5 * 4)
console.log(result)

//Créez un objet représentant un livre avec des propriétés pour le titre, l'auteur, et une méthode pour afficher une description du livre. Créez également un tableau de nombres et utilisez une boucle pour calculer leur somme.

const livre = {
    titre: "Le petit Prince",
    auteur: "HATCHI Mike",
    description: "Le jeune prince devenu roi"
}
console.log(livre)

//Créez également un tableau de nombres et utilisez une boucle pour calculer leur somme.

const chiffre = [1,2,3,4,5,6];
let somme = 0

for (let i = 0; i < chiffre.length; i++) {
    somme += chiffre[i]
}
console.log("La somme des nombres est : " + somme);

//Créez un petit jeu. Le jeu du plus ou moins.

const solution = Math.floor(Math.random() * 100)
const message = document.getElementById('Message')
console.log(solution)

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const proposition = data.get('proposition')
    
    if (isNaN(proposition) || proposition < 1 || proposition > 100) {
        e.preventDefault()
        message.textContent = "Erreur! : Veuillez rentrer un nombre valide compris entre 0 et 100"
        message.style.color = 'red'
    }
    
    if (proposition < solution) {
        message.textContent = "C'est plus"
    } else if (proposition > solution) {
        message.textContent = "C'est moins"
    } else {
        message.textContent = "Bravo! Vous avez trouvé"
        message.style.color = 'green'
    }
})




