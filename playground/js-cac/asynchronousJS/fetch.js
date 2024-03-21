new Promise((resolve,reject)=>{
    resolve("resolve data");
    reject("reject data")
}).then((data)=>console.log(data)).catch((err)=>err)
console.log("hello this is first line")

setTimeout(() => {
    console.log("this is set time out line")
}, 1000);

fetch('https://jsonplaceholder.typicode.com/todos/3')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(e => console.log(e))