/*

Link: https://www.codewars.com/kata/5300901726d12b80e8000498/train/javascript

 */

function fizzbuzz(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            arr.push('FizzBuzz')
        } else if (i % 3 === 0) {
            arr.push('Fizz')
        } else if (i % 5 === 0) {
            arr.push('Buzz')
        } else {
            arr.push(i)
        }
    }
    return arr
}

console.log(fizzbuzz(15))



