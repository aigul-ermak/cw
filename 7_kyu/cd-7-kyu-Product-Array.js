/*

Link: https://www.codewars.com/kata/5a905c2157c562994900009d/train/javascript

 */


const productArray = numbers => numbers
    .map((m, i) => numbers.reduce((acc, r, j) => i !== j ? acc * r : acc, 1))


console.log(productArray([13, 10, 5, 2, 9]))


