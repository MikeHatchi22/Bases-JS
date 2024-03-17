//Définir le périmètre d'un rectangle et d'un carré

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get perimeter() {
        return (this.width + this.height) * 2
    }

    get isValid() {
        return this.width > 0 && this.height > 0
    }

    isBiggerThan(shape) {
        return this.perimeter > shape.perimeter
    }
}

class Square extends Rectangle {
    constructor(width) {
        super(width)
    }

    get area() {
        return this.width * 4
    }
}

const r = new Rectangle(10, 20);
console.log(r.perimeter);
console.log(r.isValid)
const r2 = new Rectangle(-10, 20)
console.log(r2.isValid)
const c = new Square(10)
console.log(c.area)
console.log(r.isBiggerThan(c))

//ajouter des livres individuels à une bibliothèque avec la méthode addBook, ou d'ajouter plusieurs livres en une seule fois avec la méthode addBooks. L'attribut #books est utilisé pour stocker les livres de manière privée à l'intérieur de la classe, ce qui signifie qu'il n'est pas accessible en dehors de la classe.

class Book {
    #page = 1
    constructor(title, pages) {
        this.title = title;
        this.pages = pages
    }

    get page() {
        return this.pages = 1
    }

    nextPage () {
        if (this.#page < this.pages) {
            this.#page++
        }
    }

    close () {
        this.#page = 1
    }
}

class Library {
    #books = []

    addBook(book) {
        this.#books.push(book)
    }

    addBooks(books) {
        for(let book of books) {
            this.addBook(book)
        }
    }

    findBooksByLetter(letter) {
        const found = []
        for(let book of this.#books) {
            if (book.title[0].toLowerCase() === letter.toLowerCase()) {
                found.push(book) 
            }
        }
        return found
    }
}

const b = new Book('Seigneur des anneaux', 200);
console.log(b.page)
b.nextPage()
console.log(b.page)
b.close()
console.log(b.page)

const l = new Library()
l.addBook(b)
l.addBooks([
    new Book('Ready player one', 100),
    new Book('Oui-oui', 10),
    new Book('Sillage', 50),
])
console.log(l.findBooksByLetter('S'))