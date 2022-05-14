/*

Link: https://www.codewars.com/kata/55f3facb78a9fd5b26000036/train/javascript

 */

function checkRoot(string) {
    let a = string.split(',')
    if (a.length !== 4 || a.some(isNaN)) return 'incorrect input';
    if (a.some((num, i) => i > 0 && num - a[i - 1] !== 1)) return 'not consecutive';

    const total = a.reduce((acc, cur) => acc * cur, 1) + 1;
    const squareRoot = Math.sqrt(total)

    return `${total}, ${squareRoot}`

}

console.log(checkRoot('0,1,2,3'))



