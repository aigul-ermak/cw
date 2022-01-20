function descendingOrder(n){

    let a = Array.from(String(n), Number).sort((a,b) => b - a).join('')

    let b = +a

    return b

}
console.log(descendingOrder(111))
