class User{
    constructor(username,email,city){
        this.username = username,
        this.email = email,
        this.city = city
    }
    isOnline(){
        console.log(`the user is online from ${this.city}`)
    }
}

const akbar = new User("akbar","akbar@mail.com","karaci");

akbar.isOnline()