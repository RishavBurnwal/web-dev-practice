let obj = { name: "Rishav", age: 22 };
let jsonStr = JSON.stringify(obj);  // JSON.stringify(obj) converts the object into a JSON string (text format).
console.log(JSON.parse(jsonStr));   // JSON.parse(jsonStr) converts that JSON string back into an object.
