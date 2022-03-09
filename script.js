function solve(s) {
    let re = /[a-z]/g
    let a = s.length - s.replace(re, '').length
    if (s.length / 2 < a || s.length / 2 === a) {
        return s.toLowerCase()
    } else  if (s.length / 2 > a) {
        return s.toUpperCase()
    }

}

console.log(solve("cODE"))
