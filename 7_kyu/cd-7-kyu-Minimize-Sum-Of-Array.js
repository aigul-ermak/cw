/*

Link: https://www.codewars.com/kata/5a523566b3bfa84c2e00010b/train/javascript

 */

function minSum(arr) {
    // let sorted = arr.sort((a, b) => a - b)
    // console.log(sorted)
    // let sum = 0;
    // for (let i = 0; i < arr.length / 2; i++) {
    //     sum += sorted[i] * sorted[sorted.length - 1 - i]
    //     console.log(sum)
    // }
    // return sum

    let array = arr.sort((a, b) => a - b)
    console.log(array)
    let a = array.slice(0, array.length / 2)
    console.log(a)
    let b = array.slice(array.length / 2).reverse()
    console.log(b)
    return a.map((m, i) => m * b[i]).reduce((acc, r) => acc + r)
}

console.log(minSum([9, 2, 8, 7, 5, 4, 0, 6]))



