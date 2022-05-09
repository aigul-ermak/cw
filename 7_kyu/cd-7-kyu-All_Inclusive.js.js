/*

Link: https://www.codewars.com/kata/5700c9acc1555755be00027e/train/javascript

 */

function containAllRots(strng, arr) {
    if (!strng) return true;

    const allRotations = strng
        .split('')
        .map((_, index) => `${strng.slice(index)}${strng.slice(0, index)}`)

    return allRotations.every(el => arr.includes(el))
}


console.log(containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]))




