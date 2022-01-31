function sum(numbers) {

    if (numbers.length !== null) {
        return numbers.reduce((accum, item) => {
           accum += item
            return accum
        }, 0)
    } else {
        return 0
    }
}


console.log(sum([]))
