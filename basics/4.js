let score = "8934"

console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


let score1 = "8934acc"
console.log(typeof score1);

let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1);
console.log(valueInNumber1);
// no. with string is not converted into a no. it is NaN(Not a Number)


let score2 = null
console.log(typeof score2);

let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2);
console.log(valueInNumber2);

// "34" => 34
// "34abs" => NaN
// true => 1 ; false => 0
// null => 0 ; undefined => NaN

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true ; 0 => false
// "" => false ; "priya" => true


let someNumber = 33

let stringNumber = String(someNumber)
console.log(typeof stringNumber);
console.log(stringNumber);