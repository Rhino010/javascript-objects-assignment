function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;

}

let catalog = [];

Book.prototype.showInfo = function() {
    console.log(`Book title: ${this.title}, Author: ${this.author}, # of pages: ${this.pages}`);
}

function addBook(title, author, pages){
    let newBook = new Book(title, author, pages);
    catalog.push(newBook);
    console.log(`Book "${title}" by "${author}" has been added.`)
}

function findBook(arr, title) {
    let foundBook = arr.find(book => book.title.toLowerCase() === title.toLowerCase());
    if (foundBook) {
        console.log(`***FOUND*** Book title: ${foundBook.title}, Author: ${foundBook.author}.`);
    } else {console.log("No book found with that title.")}
}


function findAuthor(arr, author) {
    let foundAuthor = arr.filter(book => book.author.toLowerCase() === author.toLowerCase());
    if (foundAuthor) {
        console.log(foundAuthor)
    } else {
        console.log("No author found by that name.")
    }
}

function filterPages(arr) {
    let skinnyBooks = arr.filter(book => book.pages > 100)
    console.log(skinnyBooks)
}

addBook('1984', 'Orwell', 210);
addBook('Lord of the Rings', 'Tolkien', 89);
addBook('Paradise', 'Orwell', 67)

console.log(catalog.map(book => book.title));
findBook(catalog, '1984');
findBook(catalog, 'Lord of the Rings')


findAuthor(catalog, 'Orwell')

filterPages(catalog)

function updateInfo(arr, title, author) {
    arr.map(book => book.title = title)
    arr.map(book => book.author = author)
    console.log(arr)
}


updateInfo(catalog, 'My fav', 'Me')
