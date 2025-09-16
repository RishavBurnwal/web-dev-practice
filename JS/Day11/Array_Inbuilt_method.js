let arr= [12, 2, 5, 564];

let new_arr = arr.sort((a,b)=>{       //sort() is used to sort the array
    return a - b;
});
console.log(new_arr);

let new_arr1 = arr.sort((a,b)=>{      //sort() is used to sort the array
    return b - a;
});
console.log(new_arr1);

let total = arr.reduce((sum, x)=>{    // reduce() is used for operation like sum
    sum = sum + x;
    return sum;
})
console.log(total);

let new_arr2 = arr.filter((item)=>{            // filter() is used to filter the elements of an array based on the conditiion
    // console.log(item<50);  --> true/false
    return item<50;
})
console.log(new_arr2);

let new_arr3 = arr.forEach((x)=>{            // forEach() is a javaScript inbuilt method that is used to traverse all the elements
    console.log("The element is "+ x);
    return x;
})

let new_arr4 = arr.map((y)=>{                //map() is an array in built method used to traverse all the array elemnets
    console.log("map elements are "+ y);
    return y;
})
console.log("Elements of first array is "+ new_arr3);  // gives array elements as a string value because of concatination
console.log("Elements of next array is "+ new_arr4);

console.log(new_arr3);      // gives array elements as an array
console.log(new_arr4);


//Practice
// let marks = [56, 92, 90, 95, 89, 90];
// let output= marks.filter((item)=>{
//     return item>=90;
// })
// console.log(output);

