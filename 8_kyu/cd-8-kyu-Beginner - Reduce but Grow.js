/*

Link: https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript

 */

function grow(x) {
    return x.sort()
        .reduce((acc, curr) => {
            return acc * curr
        });
}

console.log(grow([4, 1, 1, 1, 4]))
