function reverseString(str) {
  let reversed = str.split("").reverse().join("");
  console.log("Reversed string: " + reversed);
}

reverseString("hello"); // Output: olleh
