async function getUser() {
  let res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  let data = await res.json();
  console.log(data.name);
}
getUser();
