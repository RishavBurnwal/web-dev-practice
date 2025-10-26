let arr = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
let freq = {};
arr.forEach(item => freq[item] = (freq[item] || 0) + 1);
console.log(freq);
