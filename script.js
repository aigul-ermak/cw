function even_or_odd(number) {
let a = number % 2
    if( a === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}

console.log(even_or_odd(2))
