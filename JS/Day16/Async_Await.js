async function fetchData(){
    let res = await fetch("https://jsonplaceholder.typicode.com/commenets");
    let data = await res.json();
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
    subject : "Java"
}
let (name, marks, subject) = student;
console.log(name, marks, subject);




