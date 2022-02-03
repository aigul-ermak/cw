function checkForFactor (base, factor) {
    // if (Number.isInteger(base / factor)) {
    //     return true
    // } else {
    //     return false
    // }

    return base % factor === 0;

}


console.log(checkForFactor(63, 7))
