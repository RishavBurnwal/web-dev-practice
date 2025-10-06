async function fetchData(){
  try{
    let res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data  = await res.json();
    console.log(data);
  }
  catch(error){
    throw error;
  }
}
fetchData();