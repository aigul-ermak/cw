/*

Link: https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0/train/javascript

 */
const solve = array =>
    array.map(word =>
        word
            .toLowerCase()
            .split('')
            .reduce(
                (total, char, index) => total + (char.charCodeAt() === index + 97),
                0
            )
    )

console.log(solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]))


//const letters = a.map(m => String.fromCharCode(96 + m));
