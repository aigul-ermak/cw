var isSquare = function (n) {
    if (n === 0) {
        return true
    } else {
        return n > 0 && Math.sqrt(n) % 1 === 0;
    }

}


console.log(isSquare(3))
