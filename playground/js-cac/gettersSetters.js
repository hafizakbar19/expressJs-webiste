//getters and setters are used to give a custom values.

class User{
    constructor(name, age, city){
        this.name = name
        this.age = age
        this.city = city
    }

    get name(){
        return this._name + "dabadabado";
    }

    set name (value){
        this._name = value;
    }
}


const user1 = new User('Ali', 35, "Karachi");

console.log(user1.name)