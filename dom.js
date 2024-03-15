

//const lis = document.querySelectorAll('li')
//console.log(Array.from(lis))

const ul = document.querySelector('ul')
console.log (
    ul.textContent)

//Créer une boucle pour cacher l'ensemble des li

const li = document.querySelectorAll('li').forEach(li => {
    li.setAttribute('hidden', 'hidden')
})

//Supprimer la couleur d'un élément

const liRed = document.querySelector('li')
li.classList.remove('red')

//Faire clignoter un élément avec une couleur 

setInterval(function() {
    li.classList.toggle('red')
}, 1000)

//Sélectionner un élément en particulier et lui appliquer du style

const liBlue = document.querySelector('li:first-child')

    liBlue.style.fontWeight = 'bold'

// Créer un élément à partir du Javascript et le placer en première position par rapport a son parent

const newLi = document.createElement('li')
newLi.innerHTML = 'Bonjour les gens'
document.querySelector('ul').prepend(newLi)

//Cloner toutes les spécificités d'un élément et le placer à une endroit en particulier

const liBlueAppend = document.querySelector('li:nth-child(2)')
const ulTwo = document.querySelector('ul')
ulTwo.append(liBlueAppend)
ulTwo.append(liBlueAppend.cloneNode(true))

//const div = document.createElement('div')
//div.innerHTML = 'Je suis une Div'
//ul.insertAdjacentElement('beforebegin', div)

const ulChild = document.querySelector('ul')

ulChild.childNodes[0].style.fontSize = '24px'
console.log(
    ulChild.childElementCount
)

const button = document.querySelector('button')
button.addEventListener('click', function (event) {
    console.log (event.target, event.currentTarget)
})

function onButtonClick (event) {
    console.log(event.currentTarget)
    event.stopPropagation()
}

//Lancer une boucle pour un ensemble d'éléments avec une action commune à la fin

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', onButtonClick, {
        once: true
    })
})

document.querySelector('div').addEventListener('click', function () {
    console.log('Click Div')
})

document.getElementById('button').addEventListener('click', (e) => {
    
})
