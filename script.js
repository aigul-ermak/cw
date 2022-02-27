String.prototype.toJadenCase = function () {
    let a = String(this).split(' ')

    return a.map(m => m[0].toUpperCase() + m.slice(1)).join(' ')

};


console.log("How can mirrors be real if our eyes aren't real".toJadenCase())

