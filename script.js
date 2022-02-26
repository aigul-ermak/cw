function findDifference(a, b) {
    let c = (a[0] * a[1] * a[2])
    let v = (b[0] * b[1] * b[2])

    return c > v ? c - v : v - c
}


console.log(findDifference([3, 2, 5], [1, 4, 4]))
