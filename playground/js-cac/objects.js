// Object.create() singleton


//literal 

// const jsUser = {
//     name: "Ali",
//     age: 25,
//     city: "Karachi",
//     email: 'ali@mail.com',
//     isActive: false
// };

// console.log(jsUser['email'])


// let obj1 = {1: 'a', 2: 'b'};
// let obj2 = {3: 'a', 4: 'b'};
// let obj3 = {4: 'a', 5: 'b'};

// let objCombined = Object.assign({}, obj1, obj2, obj3); //Object.assign() takes two params one a trget and others as a source and returns a new object


// console.log(objCombined);

//destructuring


let person = {
    name: 'Ali',
    age: 35,
    city: 'Karachi'
};


let {city : CT, age: ag} = person;

console.log(CT)
console.log(ag)