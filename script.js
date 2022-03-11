function removeDuplicateWords(s) {
    let a = s.split(' ')
    let b = new Set(a)
    return Array.from(b).join(' ')
}

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))
