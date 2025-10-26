let arr = [1,2,3,2,4,1,5];
let unique = arr.filter((item, index) => arr.indexOf(item) === index);
console.log(unique);
