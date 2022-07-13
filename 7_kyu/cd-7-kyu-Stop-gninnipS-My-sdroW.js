/*

Link: https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

 */

function spinWords(string) {
    let arr = string.split(' ')
    let newaArr= []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 5 ) {
           newaArr.push(arr[i].split('').reverse().join(''))
        } else {
            newaArr.push(arr[i])
        }
    }
    return newaArr.join(' ');
}

console.log(spinWords("Hey fellow warriors"))



