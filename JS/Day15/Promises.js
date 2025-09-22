let data = new Promise((res,rej)=>{  /*a promise in javascript takes one argument only --> The executor function itself always has two parameters , i.e, res & rej */
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
.then ((res)=>{    /*.then block is used to handle the resolved state */
    console.log(res); 
})
.catch((err)=>{    /*.catch block is used to handle the rejected state */
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