function maxMultiple(divisor, bound) {
    let arr = []

    for (let i = 0; i <= bound; i++) {
        if (i % divisor === 0) {
            arr.push(i)
        }
    }
    let c = arr.reduce((acc, item) => {
        if (acc === null || item > acc) {
            return item
        }
    }, null)

    return  c


}

console.log(maxMultiple(37, 200))
//n / divisor   6/2
// n < = bound 6 < 7
// n > 0

// a % divisor === 0
// a < = bound
// a > 0
//
// return a
