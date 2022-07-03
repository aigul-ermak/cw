/*

Link: https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript

 */

function arrayPlusArray(arr1, arr2) {
    let a = arr1.concat(arr2)
    return a.reduce((acc, cur) => {
        return acc + cur
    })
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))

