var capitals = function (word) {
    let re = /[A-Z]/g
    let arr = []
    for (let i = 0; i < word.length; i++) {
        if (word[i].match(re) !== null) {
           arr.push(i)
        }
    }
    return arr
};

console.log(capitals('CodEWaRs'))
