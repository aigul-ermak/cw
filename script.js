function XO(str) {
    let a = str.split('')
    let countX = 0
    let countO = 0
    for (let i = 0; i < a.length; i++) {
        if (a[i] === 'x' || a[i] === 'X') {
            countX += 1
        }
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] === 'o' || a[i] === 'O') {
            countO += 1
        }
    }

    return countX === countO ;
}

console.log(XO("xo"))


