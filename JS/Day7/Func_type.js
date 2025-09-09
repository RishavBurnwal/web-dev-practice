// anonymous fuction     //
// function(a,b){        --> This function can not be execute
//     console.log(a+b);
// } 

//function with Expression
// let add = function(a,b){  //In this,anonymous function will stored in a variable and then 
//     console.log(a+b);    
// }
// console.log(typeof add);
// add(20,30);
// add(40,50);

// //Immedeately Invoked Function
// (function(a,b){
//     console.log(a+b);  
// })
// (50,100);

//callback function --> a function which is passed as an arguments of another function is called callback function.

//higher order function --> a function that accepts another function as an argument and return it as a value.

//first-order --> a function which does not pass any function as an argument and does not return the function as a value.

//Callback
function add(a,b){
    return a+b;
}
function mul(a,b){
    return a*b;
}

function calculate(operate, x , y){
    return operate(x,y);
    // return add(10,20);
    // return mul(10*20);
}
// let total = calculate(add,10,20);
//console.log(total);
let product = calculate(mul, 15, 20);
console.log(product);


//arrow function
setTimeout(()=>{
    console.log("Hello Jspiders");
    
}, 5000)

//let add = ()=>{return a+b}
let print = (a,b) => {
    console.log("Executes arrow function"+ a*b);
    for(let i = 0; i< 10; i++){
        console.log(a+i);
    }
}
print(10,20);

let sub = (a,b) => console.log(a-b);
sub(10,20);


