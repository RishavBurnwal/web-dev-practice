async function fetchData(){
    let res = await fetch("https://jsonplaceholder.typicode.com/commenets"); /*async make the function asynchronous  */
    let data = await res.json(); /*await make the asynchronous function wait until the previous get resolve or reject  */
    console.log(data);
}
fetchData()

//Hoisting 
//console.log(a);


//variable
// let a = 100;
// const a = 200;
var a = 200;

//Function
var add = ()=>{
    console.log("Hello");    
}
add();

let sub = function(){
    console.log("Anonymous");
}
sub();

mul();
function mul(){
    console.log("Normal");
}


//Destructuring
//Array
let arr = [120, "hi", true, 3, 5];
let[a, b, c, d, e] = arr;
console.log(a, b, c, d, e);

// let a = arr[0];
// let b = arr[1];
// let c = arr[2];
// let d = arr[3];
// let e = arr[4];

//console.log(a, b, c, d, e);


//Object
let student = {
    id : "101",
    name : "Rishav",
    marks : "92",
    subject : "Java",
    year : "2021"
}
let (name, marks, subject, year) = student;
console.log(name, marks, subject, year);




