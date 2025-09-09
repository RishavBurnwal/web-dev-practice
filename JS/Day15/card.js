let images = document.querySelectorAll("img")
let prices = document.querySelectorAll(".price")
let stock = document.querySelectorAll(".stock")
let rating = document.querySelectorAll(".rating")
console.log(images,prices,stock,rating);


fetch("https://dummyjson.com/products")
  .then((res) => {
    res.json()
      .then((data) => {
        console.log(data.products);
        for (let i = 0; i < data.products.length; i++) {
              images[i].src = data.products[i].thumbnail   
              prices[i].innerHTML = `<h1>${data.products[i].title}</h1> <b>₹ ${data.products[i].price}</b>`
              stock[i].innerText = data.products[i].stock
              rating[i].textContent = data.products[i].rating 

        }
      })
      .catch((err1) => {
        console.log(err1);
      });
  })
  .catch((err) => {
    console.log(err);
  });