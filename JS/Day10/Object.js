//Object
//Object literal

let student = {       // Creates an object  "student"
    id : "101",
    name : "Rishav",     
    subject : ["Java", "Web", "SQL"],
    marks : "70%",
    age : "23",
    isPassed : true
}
console.log(student);


//View
console.log(student.id);             // accessing 'id' using (object.key)
console.log(student["marks"]);
console.log(student["subject"][2]);
let sub = student["subject"]
console.log(sub[1]);


//Add
student.phone = "278286373";
console.log(student);

//Update
student.age = "22";
console.log(student);

//Delete
delete student.isPassed;
console.log(student);

let a = Object.keys(student);
console.log(a);
let b = Object.values(student);
console.log(b);
let c = Object.entries(student);
console.log(c);

