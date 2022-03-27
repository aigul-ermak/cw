function isVeryEvenNumber(n) {
    let numbers = String(n).split('').map(Number)
    const totalSum = numbers.reduce((acc, number) => acc + number, 0)
    console.log(totalSum)
    while (String(totalSum).length > 1) return isVeryEvenNumber(totalSum)
    return totalSum % 2 === 0

}

console.log(isVeryEvenNumber(1234))
