/*

https://www.codewars.com/kata/57642a90dee2da8dd3000161/train/javascript

 */

function arr2bin(arr) {
    return arr
        .reduce((total, value) => (typeof value === 'number' ? total + value : total), 0)
        .toString(2)
}

console.log(arr2bin([1, 2]))
