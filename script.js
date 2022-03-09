function smallEnough(a, limit){
let arr = []
    for (let i = 0; i < a.length; i++) {
        if( a[i] <= limit) {
           arr.push(a[i])
        }
    }
    return  arr.length === a.length

}

console.log(smallEnough([101, 45, 75, 105, 99, 107], 107))
