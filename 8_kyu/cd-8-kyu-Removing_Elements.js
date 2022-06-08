/*

Link: https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript

 */


function removeEveryOther(arr){
    let a = arr.filter((ar, i) => {
        return i % 2 === 0
    })
    return a
}

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']))
