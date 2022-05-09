/*
Time to test your basic knowledge in functions! Return the odds from a list:

Link: https://www.codewars.com/kata/559f80b87fa8512e3e0000f5/train/javascript

 */


function odds(values) {
    let arr = values.filter(f => f % 2 === 0)

    if( values.length === arr.length) {
        return []
    } else {
        return values.filter(f => f % 2 !== 0)
    }
}

console.log(odds([ 2, 4, 6]))
