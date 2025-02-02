function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

let catalog = []

// Book.prototype.showInfo() = function() {
//     console.log(`Title: ${this.title}, Author: ${this.author}, No. of Pages: ${this.pages}`)
// }

Book.prototype.addBook(title, author, pages) = function() {
    let newBook = new Book(title, author, pages);
    catalog.push(newBook);
    console.log(`New book "${newBook[title]}" by "${newBook[author]}" has been added successfully.`)
}

// Book.prototype.findTitle() = function() {


    
addBook('1984', 'Orwell', 987);
showInfo()