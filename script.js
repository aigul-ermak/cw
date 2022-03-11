function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    let a = Date.parse(currentDate)
    let b = Date.parse(expirationDate)
    if (enteredCode === correctCode && a <= b) {
        return true
    } else {
        return false
    }
}

console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014'))



