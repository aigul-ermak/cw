function positiveSum(arr) {
    // let newArr = [];
let count = 0;
    for (let i = 0; i < arr.length ; i++) {
        if( arr[i] >= 0) {
           count += arr[i]
        }
    }
    return count
}


console.log(positiveSum([1,-4,7,12]))
