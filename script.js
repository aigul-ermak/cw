function printerError(s) {
    let re = /[n-z]/gi
    let arr = s.match(re)
    let c
    if(!arr) {
        c = 0
    } else {
        c = arr.length
    }

    let a = s.split('')
    let b =  a.length

    let d = []
    d.push(c)
    d.push(b)

    return d.join('/')
}


console.log(printerError("aaabbbbhaijjj"))







