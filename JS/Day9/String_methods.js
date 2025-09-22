let str="Welcome to Jspider";
console.log(str);
console.log(str.length);  
console.log(str[8]);      // print the element which is present in the index number 8 


//Replace
let str5=str.replace("W", "M");     //replace is used to replace the given element with another element only for 1st time or one time
console.log(str5);


//ReplaceAll
let str6= str.replaceAll("e", 2);  //replaceAll is used to replace the given element with another each and every time 
console.log(str6);


//Split
let arr = str.split("");      // split is used to separate the elements of array according to the given value ,i.e, "" --> here no space is given so it separates the array where no space is given so it separates each and every element of array including space(" ")
console.log(arr);
let arr2 = str.split(" ");    // " " -->here one space is given so it separates the elements of array from where space is given
console.log(arr2);


//toUpperCase
let str1=str.toUpperCase();   // It converts all the string elements into Upper case
console.log(str1);


//toLowerCase
let str2= str.toLowerCase();  // It converts the all string elements into Lower case
console.log(str2);


//CharAt
let str3 = str.charAt(2);     // CharAt is used to print the element which is present at the given index no.
console.log(str3);


//indexOf
let index = str.indexOf("e", 3);   //IndexOf is used to print the index no. only for 1 time  where the given element is present (from 0 to length-1)
// In indexOf there are 2 arguments -> 1st is the element to be searched & 2nd is the index no. from where searching starts 
console.log(index);


//lastIndexOf
let index1 = str.lastIndexOf("e");  //Same as IndexOf, the only difference is it starts searching from index (length-1) to 0
console.log(index1);


//Slice
let sub_str1 = str.slice(4);   //Slice is used to print the array elements starts from the mentioned index no.
let sub_str = str.slice(2,5);  // Here 2 arguments are given 2,5 --> 2 is the index no. from where we print the array element upto index no. 5 but the element at index 5 is not include ,i.e,( >=2 && <5)
console.log(sub_str);  
console.log(sub_str1);
