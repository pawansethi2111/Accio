

// Q3:

let library = {
    name: "City Library",
    address: "123 Main St",
    books: [
        { title: "1984", author: "George Orwell" },
        { title: "To Kill a Mockingbird", author: "Harper Lee" }
    ]
};

// find the book title whose author is "George Orwell"



// console.log(library.books[0].title)
console.log(library.books[0]["title"])

// let bookArray = library.books

// for(let t of bookArray)
// {
//     // console.log(t)
//     if(t.author==="George Orwell")
//     {
//         console.log(t.title)
//     }
// }