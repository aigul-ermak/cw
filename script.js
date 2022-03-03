function nbDig(n, d) {
    let arr = []
    let count = 0
    for (let i = 0; i <= n; i++) {
        arr.push(i * i)
    }
    let a = arr.toString().split('')

    for (let j = 0; j <= a.length; j++) {
        debugger
        if (a[j] == d)
            count = count + 1
    }
    return count
}

console.log(nbDig(5750, 0))
