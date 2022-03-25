function halvingSum(n) {
let count = 0
    while( n > 0) {
    count += n
        n = Math.floor(n / 2)
    }
    return count

}


console.log(halvingSum(127))


