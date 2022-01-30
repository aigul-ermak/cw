function openOrSenior(data){
    let newArr =[]
    let a = data.map((m, i) => {
        if (m[0] >= 55 && m[1] > 7) {
            newArr.push('Senior')
        } else {
            newArr.push('Open')
        }
    } )
    return newArr;
}

console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))


