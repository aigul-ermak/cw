function getCount(str) {
    let re = /[aeiou]/gi
    let arr = str.match(re)

    if (!arr) {
        return 0
    } else {
        return arr.length
    }
}

console.log(getCount('abracadabra'))



