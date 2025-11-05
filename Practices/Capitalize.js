function capitalizeWords(str) {
  return str.split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}
// Example: capitalizeWords("hello world") → "Hello World"
