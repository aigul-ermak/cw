/*

Link: https://www.codewars.com/kata/52b5247074ea613a09000164/train/javascript

 */

function cookingTime(eggs) {
    let t = 5;
    if (eggs > 8) {
        let c = Math.ceil(eggs / 8)
        return c * t
    }
    if (eggs === 0) {
        return 0
    }
    if (eggs > 0 || eggs <= 8) {
        return 5
    }

}


console.log(cookingTime(15))


