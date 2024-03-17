//créer un tableau avec différents élèves avec leurs notes

const students = [
    {
        name: 'John',
        notes: [1, 20, 18, 19, 12]
    },
    {
        name: 'Jane',
        notes: [17, 18, 20, 13, 15]
    },
    {
        name: 'Sophie',
        notes: [17, 12, 14, 15, 13]
    },
    {
        name: 'Marc',
        notes: [2, 3, 5, 8, 9]
    },
    {
        name: 'Manon',
        notes: [18, 17, 18, 19, 12]
    }
]

//Calculer la moyenne de chaque élève.

const moyenne = function (notes) {
    let sum = 0
    for(let note of notes) {
        sum = sum + note
    }
    return sum / notes.length
}

//Déterminer la moyenne, la pire note et la meilleure note de chaque élève

for(let student of students) {
    student.moyenne = moyenne(student.notes)
    student.worst = Math.min(...student.notes)
    student.meilleur = Math.max(...student.notes)
}

console.log(students)

//Classer les élèves en fonction de la moyenne la plus haute

const compareStudents = function (a, b) {
    return b.moyenne - a.moyenne
}

students.sort(compareStudents)

//Faire un Top 3 des étudiants en fonction des moyennes

const formatStudent = function (student) {
    return `${student.name} avec une moyenne ${student.moyenne}, meilleure note ${student.meilleur}, pire note ${student.worst}`
}

console.log(`Top 3 étudiant
1: ${formatStudent(students[0])}
2: ${formatStudent(students[1])}
3: ${formatStudent(students[2])}
`)

//Créer un système capable de calculer la fréquence des mots dans une chaine de caractère

const phrase = "Vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise situation. Moi, si je devais résumer ma vie aujourd’hui avec vous, je dirais que c’est d’abord des rencontres."
const frequencies = {}
const words = phrase
.toLowerCase()
.replaceAll(',', '')
.replaceAll('?', '')
.replaceAll(':', '')
.replaceAll('!', '')
.split(' ')

for(let word of words) {
    if(frequencies[word]){
        frequencies[word]++
    } else {
        frequencies[word] = 1
    }
}

//Créer un tableau en le triant en fonction des mots qui appraissent le plus de fois

const frequenciesArray = []
for(let k in frequencies) {
    frequenciesArray.push({
        word: k,
        count: frequencies[k]
    })
}
frequenciesArray.sort((a, b) => b.count - a.count)
console.log(frequenciesArray)