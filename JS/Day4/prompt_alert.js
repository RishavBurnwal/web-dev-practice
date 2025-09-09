// // Control flopw startements 
// // wap to check the UsertNAme is true or false 
// let user_name="Sayan@123";
// let pass="Sayan@321"
// input=prompt("Enter the User Name ")
// console.log(input)
// if(input==user_name)
// {
//     alert("Login Succesfull")

// }
// else{
//     alert("Invalid ")
// }




// wap to print the account details by checking user ID and password in facebook 
// let username="Sayan";
// let userId=1001;
// let Password="Sayan@321";
// let userFollowers=100;
// let userTotalLikes=2001;
// let input_id=prompt("Enter the UserId");
// let password=prompt("Enter the Password ");
// if(input_id==userId && password===Password)
// {
//     // alert("Login Successfull "+"welcome "+username+"Total  user Followers"+userFollowers+"total Likes "+userTotalLikes)

//     // another way is :

//     console.log(Login Succesfully  welcome ${username})
    
// }
// else{
// alert("Invalid  Credentials ")
// }


// let curr_color=prompt("Enter the Color");
// if(curr_color=="Red"|| curr_color=="red")
// {
//     alert("Stop")
// }
// if(curr_color=="Yellow" || curr_color=="yellow")
// {
//     alert("Prepare to go")
// }
// if(curr_color=="Green" || curr_color=="green")
// {
//     alert("Go")
// }
// else{
//     alert("Invalid Input")
// }

let marks =prompt("Enter the marks");// whatever will be entered will be in String Datatype

marks = Number(marks)// converting into number 
//  you can also use parseInt(Marks)
if(marks>=90 && marks<=100)
{
    alert("A");

}
else if(marks>=80 && marks<=89)
{
    alert("B");

}
else if(marks>=70 && marks<=79)
{
    alert("B");

}
else if(marks>=60 && marks<=69)
{
    alert("C");

}
else{
    alert("F");
}