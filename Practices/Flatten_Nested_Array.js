const arr = [1, [2, [3, [4]]]];
const flat = arr.flat(Infinity);
console.log(flat); // [1, 2, 3, 4]
