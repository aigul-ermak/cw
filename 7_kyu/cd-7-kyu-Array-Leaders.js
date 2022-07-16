/*

Link: https://www.codewars.com/kata/5a651865fd56cb55760000e0/train/javascript

 */

function arrayLeaders(numbers) {
    return numbers.filter((num, i) => {
        let arr = numbers.slice(i +1)
        console.log(arr)
        return num > (arr.length ? arr.reduce((sum, r) => sum +r) : true)
    })
}

console.log(arrayLeaders([16, 17, 4, 3, 5, 2]))



