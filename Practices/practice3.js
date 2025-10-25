let nums = [1, 2, 3, 4, 5];

// Filter: keep even numbers
let evens = nums.filter(n => n % 2 === 0);

// Reduce: sum of all elements
let sum = nums.reduce((acc, n) => acc + n, 0);

// Find: first number > 3
let found = nums.find(n => n > 3);

console.log(evens, sum, found);
