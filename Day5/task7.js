const showProducts = (product1, product2 = "chair") => {
    return (`Product1 is ${product1} and Product2 is ${product2}`)
}

console.log(showProducts("table"))

console.log(showProducts("table", "bag"));