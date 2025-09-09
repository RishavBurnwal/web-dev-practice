let arr1=[78, "hi", true, null, 76];
console.log(arr1);
console.log(arr1.length); // arr.length is a predefind keyword in JS used to return the length of the array

//ARRAY INBUILT METHODS

//Push
let newArr = ["hello", true, "hi"]
arr1.push(newArr);
arr1.push("hello", true);  //Push is a prdefined keyword in JS used to add the elements at the last index of the array

//Pop
arr1.pop() //Pop is a prdefined keyword in JS used to remove only one element from the last index of the array

//unshift
arr1.unshift("hello", true, false)  //Unshift is a prdefined keyword in JS used to add the elements at the first index of the array

//Shift
arr1.shift();  //Shift is a prdefined keyword in JS used to remove only one element from the first index of the array

//Splice
arr1.splice(2,2,"replaced num1", "replaced num2") // Splice is a predefined array method used to Remove elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
arr1.splice(2) // if there is only one value is given then from that index number all the elements get removed except that one
arr1.splice(3,1)  // here from index position 3, 1 element get removed 
arr1.splice(2,1,"true", false) // here from index position 2, 1 element get removed & "true" and false get added 
arr1.splice(arr1)
