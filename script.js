function getAge(inputString) {
    let a = inputString.split('')
    let b = +a[0]

    console.log(typeof b)

    return b

}

console.log(getAge('4 years old'))


