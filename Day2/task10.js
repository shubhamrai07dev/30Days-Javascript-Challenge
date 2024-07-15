// equality operator (==) chakes only value
// strict equality operator (===) checks the value and datatype
console.log(7 == '7') //true
console.log(7 === '7') //false 

console.log(true == 1) //true
console.log(true === 1) //false

console.log(false == 0) //true
console.log(false === 0) //false
// console.log("hello")
console.log(null == 0) //false 
console.log(null === 0) //false
console.log(null) //null
// console.log("first")
console.log(null == undefined) //true
console.log(null === undefined) //false
// console.log("second")
console.log(undefined == 0) //false
console.log(undefined === 0) //false