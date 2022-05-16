/*

Link: https://www.codewars.com/kata/537baa6f8f4b300b5900106c/train/javascript

 */

const circleArea = (radius) => {

    if (typeof radius !== 'number' || radius <= 0) {
        return false
    } else {
        return Number((Math.PI * (radius ** 2)).toFixed(2))
    }

};

console.log(circleArea(520))


