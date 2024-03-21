const promiseOne = new Promise((resolve, reject) => {
  let error = true;
  if (!error) {
    console.log("Promise is resolved");
    resolve({
        name: "Akbar",
        city: "Karachi"
    });
  }else{
    console.log("There is an error");
    reject("Noor is a cute boy")
  }
});

promiseOne
.then((data)=>{
    console.log(data.name, data.city)
})
.catch((e)=>console.log(e))
.finally(()=>console.log("promise is executed either resolved or rejected"))// this line get executed any way 