function digitize(n) {
    let initialArray = ('' + n).split('')
    let arrReversed = []

    for (let i =  initialArray.length - 1; i >= 0 ; i--) {
        arrReversed[i] = +initialArray.shift()
    }

  return arrReversed
}

console.log(digitize(456123))
