/*

Link: https://www.codewars.com/kata/arithmetic-sequence/train/javascript

 */

const nthterm = (first, n, c) => {
    let arr = [first]

    for (let i = 0; i < n  ; i++) {
        arr.push(arr[i] + c)
    }

    return arr[n]
}


console.log(nthterm(1, 2, 3))


