var myNumber = 7;

console.log(myNumber); // output 7

const printNumber = () => {
    myNumber = 10;
    console.log("Number is --");
    console.log(myNumber) //output 10
    
}

console.log(myNumber)  // output 7

printNumber();

console.log(myNumber) // output 10

console.log(myNumber) // output 10