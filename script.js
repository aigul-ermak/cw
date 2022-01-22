function highAndLow(numbers){
    let s = 0
    let c = numbers.split(' ').map( t => parseInt(t, 10))
        .sort((a,b) => b - a)
    if(c.length > 1) {
        let z = c.splice(0, 1)
        let f = c.splice(c.length - 1, 1)
        s = z.concat(f).join(' ')
    } else {
        let z = c.splice(0, 1)
        s = z + " " + z
    }


    return s


}


console.log(highAndLow('42'))
