// const arr1 = [0, 1, 2, 3]

// console.log(arr1.splice(1,3));

// console.log(arr1)

let array = [5, 2, 'jack',['Ali',5,8,8], 'khan',['karachi', 4,[4,5,[2,8]]]];


let flattedArray = array.flat(Infinity);  //.flat method makes all inside or multiple level inside arrays to a same level array, it takes an argunmet to devine how many levels deep should it go

// console.log(flattedArray);

const name = 'Akbar';
let age = 35;
let city = "Karachi"


let arrayOfValues = Array.of(name, age, city);
let arrayOfValues2 = Array.from({name: 'Akbar', age: 35})

console.log(arrayOfValues2)