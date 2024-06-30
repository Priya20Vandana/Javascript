let myDate = new Date()
console.log(myDate);
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toDateString());
console.log(typeof myDate);


///let myCreatedDate = new Date(2023, 3, 23) //month starts from 0.
//console.log(myCreatedDate.toDateString());
//let myCreatedDate1 = new Date(2023, 3, 23, 5, 7) //with time.
//console.log(myCreatedDate1.toLocaleString());



let myCreatedDate = new Date("01-14-2022") //with format.
console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));



let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);

console.log(`${newDate.getDay()} and the time ${myTimeStamp}`);

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}))