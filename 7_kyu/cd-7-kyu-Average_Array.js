/*

Link: https://www.codewars.com/kata/596f6385e7cd727fff0000d6/train/javascript

 */

function avgArray(array) {

    const initialArray = Array.from({length: array[0].length}, () => 0)
    const totalValues = array.reduce((result, array) => {
        array.forEach((value, index) => (result[index] += value))
        return result
    }, initialArray)
    const totalAver = totalValues.map(value => value / array.length)
    return totalAver;

}

console.log(avgArray([[1, 2, 3, 4], [5, 6, 7, 8]]));



