/*

Link: https://www.codewars.com/kata/56b7f2f3f18876033f000307/train/javascript

 */


function inAscOrder(arr) {
    return arr
        .slice(1)
        .every((elem, i) => elem >= arr[i])
}

console.log(inAscOrder([1, 2, 3, 4, 5]))


