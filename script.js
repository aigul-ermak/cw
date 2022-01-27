function removeSmallest(numbers) {
    let b = numbers.map(t => t).indexOf(Math.min(...numbers))
    let newArray = [...numbers]
    let a = newArray.splice(b, 1)
    return newArray
}

console.log(removeSmallest([2,2,1,2,1]))


