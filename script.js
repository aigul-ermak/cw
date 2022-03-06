function findMultiples(integer, limit) {
    let arr = []

    for (let i = integer; i <= limit ; i++) {
        if( i % integer === 0) {
            arr.push(i)
        }
    }
    return arr
}

console.log(findMultiples(4, 27))



