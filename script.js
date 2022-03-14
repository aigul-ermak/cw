function factorial(n){
    let count = 1
    for (let i = 1; i <= n ; i++) {
        count = count * i
    }
    return count
}


console.log(factorial(4))
