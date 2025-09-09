// let a = 10;
// let b = 20;
// var d = a + b;
// let c = d/b;
// c = d*a+b-c;
// a = a+b-c*d;
// console.log(a, b, c, d);

let a =20;
let b = 10, c = 30;
let d, e = 40;
d = e+a-b;
e = d+(d-b)*a;
b = a-e;
a = e+c;
c = a - d;
console.log(a,b,c,d,e)
