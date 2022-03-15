function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
    let a = [age1, age2, age3, age4, age5, age6, age7, age8]
    let b = Math.floor(Math.sqrt(a.map(n => n * n).reduce((acc, i) => acc = acc + i)) / 2)


    return b


}

console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45))


