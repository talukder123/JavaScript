/**
 * let book = { title: "The Hobbit", author: "Tolkien", pages: 310 };
Get an array of all keys 
Get an array of all 
Delete the pages property using delete.
 */

let book = {
    titile: "The Hobbit",
    auther: "Tolkien",
    pages: 310
};

let arr_key = Object.keys(book);
let total = Object.entries(book);

console.log(arr_key);
console.log(total);

delete book.pages;
console.log('Object without pages\n', book);