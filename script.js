function sameCase(a, b) {
    if (/[a-z]/i.test(a) && /[a-z]/i.test(b)) {
        return (a === a.toUpperCase() && b === b.toUpperCase() || (a === a.toLowerCase() && b === b.toLowerCase()))
        ? 1 : 0
    } else
        return -1
}


console.log(sameCase('c', 'b'))
