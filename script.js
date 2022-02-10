function oddOrEven(array) {
    let a = array.reduce((acc, item) => {
        acc += item
        return acc
    }, 0)
    if ( a % 2 === 0) {
        return 'even'
    } else {
        return 'odd'
    }

}


console.log(oddOrEven([0, 1, 5]))
