function findShort(s){
    let arr = s.split(' ')
    arr.sort((a,b) => a.length - b.length)

    return arr[0].length
}


console.log(findShort('bitcoin take over the world maybe who knows perhaps'))
