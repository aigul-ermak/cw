/*

Link: https://www.codewars.com/kata/548ef5b7f33a646ea50000b2/train/javascript

 */

const charFreq = message =>
    message
        .split('')
        .reduce((acc, item) => {
            acc[item] = acc[item] ? acc[item + 1] : 1
            return acc
        }, {})

console.log(charFreq("I like cats"))

