function divisors(integer) {
    let arr = []
    let text = `${integer} is prime`
    for (let i = 1; i < integer; i++) {
        if(integer % i === 0 && i !== 1) {
            arr.push(i)
        }
    }
    if( arr.length !== 0) {
        return arr
    } else {
        return text
    }
};
