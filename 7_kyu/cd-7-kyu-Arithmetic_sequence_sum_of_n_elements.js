/*

Link: https://www.codewars.com/kata/55cb0597e12e896ab6000099/train/javascript

 */

function ArithmeticSequenceSum(a, r, n) {
    let arr = [a];
    for (let i = 1; i < n; i++) {
        arr.push(arr[0] + r * i)
    }
    return arr.reduce((acc, curr) =>  acc + curr, 0);
}


console.log(ArithmeticSequenceSum(3, 2, 20))


