function removeUrlAnchor(url) {

    let a = url.indexOf('#')
    if (a > 0) {
        return url.slice(0, a)
    } else {
        return url
    }
}

console.log(removeUrlAnchor('www.codewars.com/katas/'))
