//OBJECTC CREATION METHODS

//1) Creating Object using Literals
//2) Creating Object using constructor function
//3) Creating Object using class with Constructor


//1)Creating Object using Literals
let student = {       // Creates an object  "student"
    id : "101",
    name : "Rishav",     
    subject : ["Java", "Web", "SQL"],
    marks : "70%",
    age : "23",
    isPassed : true
}
console.log(student);

//2)Creating Object using constructor function
function student(id, name, age, marks, isPresent){
    this.id = id;
    this.name = name;
    this.age = age;
    this.marks = marks;
    this.isPresent = isPresent;
}
let s1 = new student(67, "Raghav", 24, [73, 65, 82], true);
console.log(s1);
console.log(s1.name);


//3)Creating Object using class with Constructor
class Employee{
    constructor(id, name, sal, dept, age, phone){   //constructor in JavaScript is a special function that is used to create and initialize objects. When we want to create multiple objects with similar properties and methods, the constructor is used.

        this.id = id;    // 'this' keyword refers to the current class name or immediate parent object.
        this.name = name;
        this.sal = sal;
        this.dept = dept;
        this.age = age;
        this.phone = phone;
    }
}
var e1 = new Employee(101, "Rishav", 50000, "SD", 23, 154154446);
console.log(e1);

let e2 = new Employee(102, "Dev", 35000, "ST", 22, 96164966);
console.log(e2);
console.log(e2["age"]);






