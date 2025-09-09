//Document Object Model (DOM)

//Also called Document object model
//DOM is an interface between JavaScript and Browser
//We can convert HTML element to javascript object using DOM
//It is present in browser
//DOM is a tree hirarchical structure of HTML element
//HTML element --> HTML tags

let paragraph= document.getElementById("para");  // "getElementById" is Used to select an existing element from the HTML by its id.
console.log(paragraph);
paragraph.innerText = "Welcome to html";   //"innerText" is used to write the text inside the tag in javascript -> print in a web page

let h1 = document.getElementById("rambo");
console.log(h1);
h1.innerText = "Welcome to javascript";

let root = document.getElementById("root");
console.log("root");

let heading2 = document.createElement("h2");
console.log(heading2);
heading2.textContent = "I am tag of js";

let image = document.createElement("img");
console.log(image);
image.src = "https://tse4.mm.bing.net/th/id/OIP.-wtRKCICcILF5WqJLjODxgHaED?pid=Api&P=0&h=180"
image.setAttribute("height", "100")
image.setAttribute("alt", "Image not found");   // "setAttribute" is Used to add or change an attribute of an element.

let image1 = document.createElement("img");  //create the element "img"
console.log(image1);
image1.setAttribute("src", "https://tse1.mm.bing.net/th/id/OIP.c1tx-MTZsVMl9TnHgqrYEgHaE8?pid=Api&P=0&h=180");
image1.setAttribute("height", "100");

root.appendChild(heading2);    //appendChild like 'add' -> here 'heading2' will become a child of 'root'
root.appendChild(image);       // "appendChild" is  Used to add (append) a new child element inside a parent element.
root.appendChild(image1);

//Write a js program to print user information like name, salary, dept, role with profile image on the browser.
//Create all informations in js objects and append using root


