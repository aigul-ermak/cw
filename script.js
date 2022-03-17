function evenAndOdd(num) {
    let a = num.toString().split('')
    let NE = []
    let NO = []
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 === 0) {
            NE.push(a[i])
        } else {
            NO.push(a[i])
        }
    }

    return [+(NE.join('')), +(NO.join(''))]
}

console.log(evenAndOdd(126453))


