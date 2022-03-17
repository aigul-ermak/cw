function nthChar(words) {
    let s = ''
    for (let i = 0; i < words.length; i++) {

        s += words[i].charAt(i)
    }
    return s
}

console.log(nthChar(['yoda', 'best', 'has']))


