

// console.log(b); // undefined (no error)
// var b = 10;
// console.log(b); // 10


console.log(a); // ❌ ReferenceError: Cannot access 'a' before initialization

let a = 10; // 'a' is declared using 'let' so we can not access 'a' before declaration
console.log(a); // ✅ 10
