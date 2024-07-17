function sayHii(value) {
    if (value >= 18) {
        console.log(`Hii to ${value}`)
    }
}

function sayNamaste(para) {
    console.log(`namaste to ${para}`)
}
 
function HOF(fun1, fun2, num) {
    fun1(num);
    fun2(num)
}
HOF(sayHii, sayNamaste, 30)