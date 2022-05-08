/*
Write a function that returns true if the number is a "Very Even" number.

If a number is a single digit, then it is simply "Very Even" if it itself is even.

If it has 2 or more digits, it is "Very Even" if the sum of its digits is "Very Even".

Link: https://www.codewars.com/kata/58c9322bedb4235468000019/train/javascript

 */

function isVeryEvenNumber(n) {
    const numbers = n.toString().split('').map(Number);
    const totalNumbers = numbers.reduce((acc, i) => acc + i, 0)
    while (String(totalNumbers).length > 1) return isVeryEvenNumber(totalNumbers)

    return totalNumbers % 2 === 0
}

console.log(isVeryEvenNumber(1));





