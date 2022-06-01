/*

Link: https://www.codewars.com/kata/570e8ec4127ad143660001fd/train/javascript

 */

function billboard(name, price = 30) {
    let count = 0;
    const nameLength = name.split('')
    for (let i = 0; i < nameLength.length; i++) {
        count += price
    }
    return count
}

console.log(billboard('Jeong-Ho Aristotelis'));



