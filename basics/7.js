 // Primitive

 // 7 types : String, Number, Boolean, Symbol, BigInt
 const score = 100
 const scoreValue = 100.9
 const isLoggedIn = false
 const outsideTemp = null
 let userEmail;


 const id = Symbol('1234')
 const anotherId = Symbol('1234')

 console.log(id === anotherId)

 // symbol is unique always even if we feed same value they will not be same.
  
 const bigNumber = 52856258873955783n


 // Reference (Non Primitive)
 // Arrays, Objects, Functions

 const heros = ("SHaktiman", "nagraj", "doga");

  let myObject ={
    name: "priya",
    age: 20
  }

 const myFunction = function(){
    console.log("hello world");
 }


 //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 //stack (primitive), heap (non-primitive)

 let myName = "priya"
 let myTitle = myName
 
 myTitle = "vandana"
  console.log(myName);
  console.log(myTitle)



  let userOne = {
      email = "ekjvnekj@gmail.com",
      age = 46
  }

  let userTwo = userOne

  userTwo.email = "kjeiwjol@gmail.com"

  console.log(userOne.email);
  console.log(userTwo,email);
  