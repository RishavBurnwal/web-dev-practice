class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  display() {
    console.log(`${this.name} is ${this.age} years old.`);
  }
}
let s1 = new Student("Rishav", 22);
s1.display();
