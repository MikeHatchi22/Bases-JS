const b = 'Les gens'
        const a = 'Hello World'
        const notes = [
            13,
            21,
            20,
            10,
            [1,2,3]
        ]
        const person = {
            Firstname: 'John',
            Lastname: 'Doe',
            Pays: 'FR',
            age: 17,
            notes: [15,14,19],
            Job: 'Développeur'
        }
        const peutconduireFr = (person.age >= 18 && person.Pays === 'FR')
        const peutconduireUS = (person.age >= 16 && person.Pays === 'US')
        if (peutconduireFr) {
            console.log ('Vous avez le droit de conduire en France')
        } else if (peutconduireUS) {
            console.log ("Vous avez le droit de conduire aux Etats-Unis")
        } else {
            console.log ("Vous n'avez pas le droit de conduire")
        }

        const birthyear = prompt ('Quel est votre année de naissance')
        const age = 2024 - birthyear
        if (age < 13) {
            console.log ("Nous vous recommandons Lilo & Stitch ")
        }
        else if (age < 18) {
            console.log ("Nous vous recommandons Matrix")
        }
        else {
            console.log ("Nous vous recommandons Evil Dead")
        }

        const firstnumber = prompt ("Choisissez un chiffre")
        const secondnumber = prompt ("Choisissez un second chiffre")
        const result = firstnumber * secondnumber
        if (result > 0) {
            console.log (`${firstnumber}x${secondnumber}=${result} est positif`)
        } else {
            console.log (`${firstnumber}x${secondnumber}=${result} est négatif`)
        }

        for (let a = 0; a < notes.length; a++) {
            console.log (notes[a])
        }

        let number = prompt ("Choisissez un chiffre entre 0 et 10")
        if (number > 10 || number < 0) {
            console.log ("Ce chiffre n'est pas compris entre 0 et 10")
        } else {
                for (let i = number; i >= 0; i--) {
                    console.log (i)
                }
        }

        let chiffre = prompt('Entrez un nombre')
if (chiffre > 10 || chiffre < 0) {
    console.log("Le nombre n'est pas entre 0 et 10")
} else {
    for (let i = chiffre; i >= 0; i--) {
        console.log(i)
    }
}

const guessnumber = 7
let usernumber = prompt ("Devinez le chiffre")
if (usernumber != guessnumber && usernumber < guessnumber) {
    console.log ("C'est Plus")
}
else if (usernumber != guessnumber && usernumber > guessnumber) {
    console.log ("C'est moins")
}

        function candrive (age, pays) {
            if (
                (age >= 18 && person.Pays === 'FR') ||
                (age >= 16 && person.Pays === 'US')
            ) {
                return true
            }
            return false
        }
        console.log (candrive(19,"FR"))

        function getRandomInt(max) {
            return Math.floor(Math.random() * (max + 1))
        }
        const solution = getRandomInt(10) 
        console.log (solution)

        function isright(n) {
            return solution === n
        }

        function guess() {
            const nombre = prompt ("Choisissez une nombre") * 1
            return isright(number)
        }