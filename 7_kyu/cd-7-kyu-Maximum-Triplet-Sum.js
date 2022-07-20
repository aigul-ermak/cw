/*

Link: https://www.codewars.com/kata/5aa1bcda373c2eb596000112/train/javascript

 */

function maxTriSum(numbers) {
    return numbers.sort((a, b) => a - b)
        .filter((elem, i) => numbers.indexOf(elem) === i)
        .slice(-3)
        .reduce((acc, i) => acc + i)
}

console.log(maxTriSum([2, 1, 8, 0, 6, 4, 8, 6, 2, 4]))


