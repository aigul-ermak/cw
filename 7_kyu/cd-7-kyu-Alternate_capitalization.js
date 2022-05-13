/*

Link: https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript

 */

function capitalize(s) {
    let arr = []
    arr.push(s.split('').map((m, i) => i % 2 === 0 ? m.toUpperCase() : m).join(''))
    arr.push(s.split('').map((m, i) => i % 2 !== 0 ? m.toUpperCase() : m).join(''))
    return arr
}

console.log(capitalize('abcdef'))

