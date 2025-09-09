let data = new Promise((res,rej)=>{
    if(rej){
        console.log("error");      
    }
    else if(res){
        console.log("Success");
    }else{
        console.log('nothing')
    }
})

data
.then ((res)=>{
    console.log(res); 
})
.catch((err)=>{
    console.log(err);
})

fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=>{
    console.log(res);
    res.json()
    .then((data)=>{
        console.log(data);   
    })
    .catch((err)=>{
        console.log(err);
    })
})
.catch((err)=>{
    console.log(err);
    
})