function doubleChar(str) {
    let arr = []
    let a = str.split('')
    for (let i = 0; i < a.length; i++) {
        arr.push(a[i] + a[i])
    }
    return arr.join('')
}

console.log(doubleChar('Hello World'))








