function wordsToMarks(string) {
    let arr = []
    for (let i = 0; i < string.length; i++) {
       arr.push(string[i].charCodeAt(0) - 97 + 1)
    }

    return arr.reduce((acc, i) => {
        acc = acc + i
        return acc
    }, 0)
}

console.log(wordsToMarks('family'))
// 10
