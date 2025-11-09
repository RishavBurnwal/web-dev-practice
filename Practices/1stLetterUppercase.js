let str = "hello world javascript";
let result = str.split(' ')
  .map(word => word[0].toUpperCase() + word.slice(1))
  .join(' ');
console.log(result);
