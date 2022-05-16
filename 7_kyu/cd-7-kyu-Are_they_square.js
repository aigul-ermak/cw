/*

Link: https://www.codewars.com/kata/56853c44b295170b73000007/train/javascript

 */

const isSquare = (arr) =>
    (arr.length > 0 ? arr.every(num => Number.isInteger(Math.sqrt(num)) ) : undefined)




console.log(isSquare([1, 4, 9, 16, 7, 36]))


