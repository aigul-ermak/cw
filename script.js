function minMax(arr){
    let a = arr.sort((a, b) => a - b)
    let b = []
    b.push(a.slice(0, 1))
    b.push(a.slice(-1))


    return b.reduce((prev, item) => prev.concat(item))
}


console.log(minMax([2334454,5]))







