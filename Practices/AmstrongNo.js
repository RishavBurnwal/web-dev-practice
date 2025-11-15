function isArmstrong(num) {
  const digits = num.toString().split('');
  const power = digits.length;
  const sum = digits.reduce((acc, d) => acc + Math.pow(+d, power), 0);  // using reduce method
  return sum === num;
}
console.log(isArmstrong(153)); // true

