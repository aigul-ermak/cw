/*

Link: https://www.codewars.com/kata/561046a9f629a8aac000001d/train/javascript

 */

function matchArrays(v,r){
return(v.filter(elem => r.includes(elem))).length
}

// console.log(matchArrays([1,2,3,4,5],    [2,3,4,5,6]));
console.log(matchArrays(['incapsulation','OOP','array'],['time', 'propert','paralelism','OOP']));


