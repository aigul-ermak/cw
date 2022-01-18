function find_average(array) {
    let aver = 0

    if (array.length === 0) {
        return 0
    } else {
        for (let i = 0; i < array.length; i++) {
            aver += array[i]
        }
        return aver / array.length;
    }

}

console.log(find_average([5, 4, 7]))
