/*

Link: https://www.codewars.com/kata/5888cba35194f7f5a800008b/train/javascript

 */

const asteriscIt = (n) =>
  [...(Array.isArray(n) ? n : String(n))]
      .join('')
      .split('')
      .map(Number)
      .map((num, index, array) => (num % 2 === 0 && array[index + 1] % 2 === 0 ? `${num}*` : num))
      .join('')


// console.log(asteriscIt('5312708'))
console.log(asteriscIt([1, 4, 64, 68, 67, 23, 1]))
//Array.isArray(n) if n string - false, if n isArray = true

