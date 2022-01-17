function countPositivesSumNegatives(input) {
    if (input === null || input.length < 1 ) {
        return []
    }
    let arr = []
    let sumPlus = 0
    let sumMinus = 0

    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            sumPlus += 1
        } else {
            sumMinus += input[i]
        }
    }
    arr.push(sumPlus, sumMinus)

    return arr
}

console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]))
