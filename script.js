'use strict';
const bookCollection = document.querySelectorAll(".book");
console.log(bookCollection);

const removeAdd  = document.querySelectorAll(".adv");
  removeAdd[0].remove();

  bookCollection[0].before(bookCollection[1]);
  bookCollection[2].before(bookCollection[4]);
  bookCollection[5].after(bookCollection[2]);

document.body.style.backgroundImage = "url(/image/you-dont-know-js.jpg)";

let bookThreeName = bookCollection[4].querySelector("a");
  bookThreeName.innerText = "Книга 3. this и Прототипы Объектов";

let	book6Element = bookCollection[2].querySelectorAll("li");
let newLiElement = document.createElement("li");
  newLiElement.innerHTML = "Глава 8: За пределами ES6";
  book6Element[8].after(newLiElement); 

let book2Element = bookCollection[0].querySelectorAll("li"),
    book5Element = bookCollection[5].querySelectorAll("li");
book5Element[2].before(book5Element[9]);
book5Element[4].after(book5Element[2]);
book5Element[7].after(book5Element[5]);
book2Element[2].before(book2Element[3]);
book2Element[2].before(book2Element[6]);
book2Element[9].after(book2Element[2]);
book2Element[8].after(book2Element[7]);
book2Element[4].before(book2Element[8]);