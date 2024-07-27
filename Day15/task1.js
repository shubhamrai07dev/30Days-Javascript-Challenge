function outerFunc() {
    const outVar = 3

    function innerFuc() {
        console.log(outVar)
    }
    innerFuc()
}
outerFunc()