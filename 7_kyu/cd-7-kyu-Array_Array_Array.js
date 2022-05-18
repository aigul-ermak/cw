/*

Link: https://www.codewars.com/kata/57eb936de1051801d500008a/train/javascript

 */

const isNumber = value => typeof value === 'number'

const explode = x => {
    const [firstElement, secondElement] = x

    if (isNumber(firstElement) && isNumber(secondElement)) return new Array(firstElement + secondElement).fill(x)
    else if (isNumber(firstElement)) return new Array(firstElement).fill(x)
    else if (isNumber(secondElement)) return new Array(secondElement).fill(x)
    return 'Void!'
}

console.log(explode(['a', 3]))


