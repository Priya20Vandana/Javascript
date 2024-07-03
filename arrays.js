const myArr=[0, 1, 2, 3, 4, 5]
//console.log(myArr);

const myArr2 = new Array(1, 2, 3, 4, 5, 6)
//console.log(myArr[1]);

//array methods

//myArr.push(6)
//myArr.push(9)
//myArr.pop()

//myArr.unshift(8)
//myArr.shift()

//console.log(myArr.includes(33));
//console.log(myArr.indexOf(4));

const newArr = myArr.join()

//console.log(myArr);
//console.log(newArr);//this join changes the typeof the array to string

//slice, splice
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log("C ",myArr);
