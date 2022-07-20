/*

Link: https://www.codewars.com/kata/5a4e3782880385ba68000018/train/javascript

 */
function balancedNum(number) {
    let arr = String(number).split('').map(Number)

    let b;
    let secArr;
    const red = (arr) => arr.reduce((acc, i) => acc + i, 1)

    if (arr.length % 2 === 1) {
        b = Math.floor(arr.length / 2)
        secArr = red(arr.slice(b + 1))
    } else {
        b = arr.length / 2 - 1
        secArr = red(arr.slice(b + 2))
    }
    let newArr = red(arr.slice(0, b))
    return newArr === secArr ? 'Balanced' : 'Not Balanced'
}

console.log(balancedNum(295592))


