const binaryArrayToNumber = arr => {
    let a = arr.join('')
    return parseInt(a, 2)
};


console.log(binaryArrayToNumber([1,1,1,1]))
