function findSum(n) {
    let arr = []
    for (let i = 1; i <= n ; i++) {
        if( i % 3 === 0 || i % 5 === 0) {
            arr.push(i)
        }
    }
    return arr.reduce((acc, item) => {
        acc = acc+ item
        return acc
    })
}


console.log(findSum(10))
