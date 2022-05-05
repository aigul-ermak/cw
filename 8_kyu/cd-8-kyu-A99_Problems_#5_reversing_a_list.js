/*
Write a function that reverses a list, without using any built-in reverse functions.

Link: https://www.codewars.com/kata/57d993083c3f960c71000005/train/javascript

 */


const rev = (xs) => {
    let arr = [];
    xs.map(v => arr.unshift(v))
   return arr
}



console.log(rev([3,2,1]))
