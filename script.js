function sumDigits(number) {
    let a = number.toString().replace('-', '').split('')
    let b = a.reduce((acc, item) => {

        acc = acc + (+item)
        return acc;
    }, 0)
    return b
}


console.log(sumDigits(-14))



