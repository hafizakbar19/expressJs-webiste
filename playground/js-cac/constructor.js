//constructor function

function User (userName, age, city, isLoggedIn){
    this.userName = userName,
    this.age = age,
    this.city = city,
    this.isLoggedIn = isLoggedIn,

    this.greeting = function(){
        console.log(`hello ${this.userName}`)
    }
}

let user1 = new User("ali",25,"Karachi", true);
let user2 = new User("Khan",28,"Lahore", false);

console.log(user2.city)