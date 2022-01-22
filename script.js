function sumTwoSmallestNumbers(numbers) {
    let a = numbers.sort((a,b) => a - b )
    return a[0]+ a[1]
}
console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]))
