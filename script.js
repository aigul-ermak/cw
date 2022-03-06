function disemvowel(str) {
let re = /[aeiou]/gi

    return str.replace(re, '')
}

console.log(disemvowel('This website is for losers LOL!'))



