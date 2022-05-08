/*
For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array).
Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.

Link: https://www.codewars.com/kata/5a1ee4dfffe75f0fcb000145/train/javascript

 */


function bingo(a) {
const bingoLetters = ['b', 'i', 'n', 'g', 'o'];
const letters = a.map(m => String.fromCharCode(96 + m));
const hasBingo = bingoLetters.every(char => letters.includes(char))

    return hasBingo ? 'WIN' : 'LOSE'
}

console.log(bingo([1,2,3,4,5,6,7,8,9,10]))





