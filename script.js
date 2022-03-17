function tetration(x,y){

if ( y < 1) return 1

    let n = x

    for (let i = 1; i < y ; i++) {
        n = Math.pow(x, n)
    }
    return n
}


console.log(tetration(5,2))


//3 3*3*3*3 4th iteration
//

