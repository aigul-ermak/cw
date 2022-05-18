/*

Link: https://www.codewars.com/kata/582642b1083e12521f0000da/train/javascript

 */

function arrayMash (array1, array2) {
   let arr = []
    for (let i = 0; i < array1.length; i++) {
        arr.push(array1[i], array2[i])
    }
    return arr
}

console.log(arrayMash([1, 2, 3], ['a', 'b', 'c']))


