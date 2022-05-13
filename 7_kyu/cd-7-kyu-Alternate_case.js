/*

Link: https://www.codewars.com/kata/57a62154cf1fa5b25200031e/train/javascript

 */

function alternateCase(s) {
    return s.split('')
        .map(m => m === m.toLowerCase() ? m.toUpperCase()
            : m === m.toUpperCase() ? m.toLowerCase() : '')
        .join('')
}

console.log(alternateCase("Hello World"));




