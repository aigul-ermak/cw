/*

Link: https://www.codewars.com/kata/5a63948acadebff56f000018/train/javascript

 */

function maxProduct(numbers, size) {
    return numbers.sort((a, b) => a - b)
        .slice(-size)
        .reduce((acc, item) => {
            return acc * item
        })
}

console.log(maxProduct([10, 2, 3, 8, 1, 10, 4], 5))



