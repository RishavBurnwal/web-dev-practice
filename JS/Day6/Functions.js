//Functions

function add(a,b){
    var a = a+b;
    console.log(a);
    console.log(b);
    
}
add(162,248);

//___________________________________________________________________________________________

function multiply(a,b){
    let c = a*b;
    console.log(c);
    return c;
}
let total = multiply(15,30);
console.log("The product of "+ total);

//___________________________________________________________________________________________

function parent(a,b){
    let c = a+b; //73
    function child(m,n){
        ++c; //74
        let x = m*n; //96
        return x = x+c //170
    }
    let total = child(8,12);
    return total; //170
}
let sum = parent(35,38);
console.log(sum);
