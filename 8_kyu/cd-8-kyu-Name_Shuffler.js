/*

Link: https://www.codewars.com/kata/559ac78160f0be07c200005a/train/javascript

 */

function nameShuffler(str){
    let a = str.split(' ')
    let c = a.splice(1, 1)

    return  c.concat(a).join(' ')
}

console.log(nameShuffler('john McClane'))



