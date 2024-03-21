// const name1 = Symbol('Akbar');

// const name2 = Symbol('Akbar');

// console.log(name1 == name2); // returns false, because the symbol data type returns a unique value even it is same.

// console.log(typeof name1)


let myname = 'Akbar';

let myname2 = myname;

myname = 'Ahmed';


console.log(myname, myname2)


let user1 = {
    name: 'Akbar',
    email: 'akbar@mail.com'
};

let user2 = user1;

user2.email = 'ahmed@mail.com';

console.log(user1.email, user2.email); //non primitive data types use heap memory, mean when we change in the reference then original value is changed as well 