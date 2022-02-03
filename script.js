function getSum(a, b) {
    const min = a < b ? a : b
    const max = a < b ? b : a

    let count = 0
    for (let i = min; i <= max; i++) {
        count += i
    }

    return count


}

console.log(getSum(0, -1))
