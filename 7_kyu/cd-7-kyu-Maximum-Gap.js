/*

Link: https://www.codewars.com/kata/5a7893ef0025e9eb50000013/train/javascript

 */

function maxGap (numbers){
    let a = numbers.sort((a, b) => b - a)
    let newArr = [];
    for (let i = 0; i < a.length - 1; i++) {
        newArr.push(numbers[i] - numbers[i + 1])
    }
    return Math.max(...newArr)

}

console.log(maxGap([-7,-42,-809,-14,-12]))



