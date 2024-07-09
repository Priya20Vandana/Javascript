//singleton
//object.create -> this can also be used to create object, it is constructive type 

//object literals

const mySym = Symbol("key1")

const user = {
    name: "priya",
    "full name": "Priya Vandana",
    [mySym]: "mykey1",
    age: 20,
    location: "Bihar",
    email: "fdfdfe@gamil.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}

// console.log(user.email)
// console.log(user["email"])  //most preferable method for accessing object material.
// console.log(user["full name"])
// console.log(user[mySym])


user.age = 21
//Object.freeze(user) //values in object user cannot be changed
user.age = 22
console.log(user)

//Functions

user.greetings = function(){
    console.log("hello user");
}

user.greetings1 = function(){
    console.log(`hello user, ${this.name}`);
}

console.log(user.greetings());
console.log(user.greetings1());