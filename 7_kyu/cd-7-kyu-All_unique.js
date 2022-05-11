/*

Link: https://www.codewars.com/kata/553e8b195b853c6db4000048/train/javascript

 */

function hasUniqueChars(str){
let a = new Set(str)
    return a.size === str.length;
}


//true
//false

console.log(hasUniqueChars("  nAa"))



