function squareDigits(num) {

    let newArr = num.toString().split('')
    let arr = []

    for (let i = 0; i < newArr.length; i++) {
        let n = newArr[i] * newArr[i]
        arr.push(n)
    }
    let s = Number(arr.join(''))
    return s
}

console.log(squareDigits('2112'))

console.log(typeof (squareDigits('2112')))
