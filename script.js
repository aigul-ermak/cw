

var moveZeros = function (arr) {

    let newArr = [];
    let oldArr =[];
    let totalArr = [];

    arr.forEach(item => {

        if (item === 0) {
            newArr.push(item)
        } else {
            oldArr.push(item)
        }
    })
    return totalArr = oldArr.concat(newArr);
}


console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));
