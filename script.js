function index(array, n) {
    if(array.length > n) {
        return array[n]**n
    } else {
        return -1
    }


}

console.log(index([3,5], 1))
