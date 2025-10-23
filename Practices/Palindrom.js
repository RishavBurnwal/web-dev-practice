function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  if (str === reversed) {
    console.log(str + " is a palindrome");
  } else {
    console.log(str + " is not a palindrome");
  }
}

isPalindrome("madam");  // Output: madam is a palindrome
isPalindrome("hello");  // Output: hello is not a palindrome
