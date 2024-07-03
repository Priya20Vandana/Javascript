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
// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)
// console.log(myn1);
// console.log("B ", myArr);

// const myn2 = myArr.splice(1, 3)
// console.log(myn2);
// console.log("C ",myArr);



//++++++++++++++ More about Arrays+++++++++++++++

const group1 = ["archita", "chhata", "naush", "priya"]
const group2 = ["arshi", "aditi", "harjot", "nadia", "shree", "swati"]

//group1.push(group2)

//console.log(group1);
//console.log(group1[3][1]);


//const group3 = group1.concat(group2)

// const group3 = [...group1, ...group2] //spread operation, can cnacat more than two arrays
// console.log(group3);


// const another_array = [1,2,3,[4,5,6],7,8,[9,10,[11,12]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("pv"))
console.log(Array.from("priya"))
console.log(Array.from({name: "priya"}))//interesting since it does not return anything

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))

