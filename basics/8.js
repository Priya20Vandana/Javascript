const name = "Priya"
const age = 20

//console.log(name + age + "is");  not much preferred.


console.log(`Hello my name is ${name} and my age is ${age}`);
//Write lke this.


//String declaration

const gameName = new String('hitesh-hc')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('k'));


const newString = gameName.substring(0, 5)
console.log(newString);


const anotherString = gameName.slice(-8, 5) //Negative value only in slice.
console.log(anotherString);

const newStringOne = "   PRiya   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))
console.log(url.includes('sunder'))
console.log(gameName.split('-'))