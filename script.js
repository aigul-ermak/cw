function capitalize(s) {
    let a = s.split('')
    let arr = []
    let arr1 = []
    for (let i = 0; i < a.length; i++) {
        if (i % 2 === 0) {
            arr.push(a[i].toUpperCase())
            arr1.push(a[i])
        } else if (i % 2 !== 0) {
            arr.push(a[i])
            arr1.push(a[i].toUpperCase())
        }
    }

    return [arr.join(''), arr1.join('')]
};

console.log(capitalize("abcdef"))
