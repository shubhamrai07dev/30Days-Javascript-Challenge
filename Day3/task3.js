const num1 = 12
const num2 = 14;
const num3 = 16;

if (num1 > num2) {
    if (num1 > num3) {
        console.log("greatest number one")
    } else {
        console.log("Greatest number three")
    }

} else {
    if (num1 < num3) {
        console.log("smallest number is num1")
    }
    if (num2 > num3) {
        console.log("greatest number is two")
    }
}