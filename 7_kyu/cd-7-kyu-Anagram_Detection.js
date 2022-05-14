/*

Link: https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript

 */

var isAnagram = function(test, original) {
    let a = test.toLowerCase().split('').sort().join('')
    let b = original.toLowerCase().split('').sort().join('')
    return a === b
};


console.log(isAnagram("Buckethead", "DeathCubeK"))



