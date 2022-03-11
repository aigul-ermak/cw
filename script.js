function rowWeights(array) {
    let arr = []
    let arrTwo = []
    let arrThr = []
    for (let i = 0; i < array.length; i = i + 2) {
        arr.push(array[i])
    }

    for (let i = 1; i < array.length; i = i + 2) {
        arrTwo.push(array[i])
    }

    arrThr.push(arr.reduce((acc, i) => acc = acc + i))
    arrThr.push(arrTwo.reduce((acc, i) => acc = acc + i))

    return arrThr


}

console.log(rowWeights([50, 60, 70, 80]))



