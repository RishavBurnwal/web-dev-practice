function findMissing(arr) {
  const n = arr.length + 1;
  const total = (n * (n + 1)) / 2;
  const sum = arr.reduce((a, b) => a + b, 0);
  return total - sum;
}
// Example: findMissing([1,2,4,5]) → 3
