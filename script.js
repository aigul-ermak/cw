const sequenceSum = (begin, end, step) => {
    let count = 0
    if (begin < end) {
        for (let i = begin; i <= end; i = i + step) {
            count = count + i
        }
    } else {
        return 0
    }

    return count
};


console.log(sequenceSum(1, 5, 1))
