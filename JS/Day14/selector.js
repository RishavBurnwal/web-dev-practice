let paragraph = document.getElementById("para");
console.log(paragraph);
paragraph.innerText = "Welcome to HTML";
paragraph.style.fontSize = "50px";
paragraph.style.backgroundColor = "yellow";

let div = document.getElementsByClassName("wiki");
console.log(div[0]);
console.log(div[1]);
div[0].innerText = "I am div1";
div[1].innerText = "I am div2";
div[1].style.backgroundColor = "green";
div[1].style.color = "white";

let para = document.getElementsByTagName("p");
console.log(para);
para[0].textContent = "I am a para1";
para[1].textContent = "I am a para2";
para[2].textContent = "I am a para3";

let image = document.getElementsByName("trojan");
console.log(image);
console.log(image[0]);
image[0].setAttribute("src", "https://static.toiimg.com/thumb/msid-120797470,width-1280,height-720,resizemode-4/120797470.jpg");

let para = document.querySelector("#rambo");


//caraso