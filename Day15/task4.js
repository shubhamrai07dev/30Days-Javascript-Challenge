function captureName(name) {
    function greet() {
        console.log(`namaste ${name}`)
    }
    return greet
}
const greetByName = captureName("ram")
greetByName()