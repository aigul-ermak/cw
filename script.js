function removeExclamationMarks(s) {
    let re = /!/g

    return s.replaceAll(re, '');
}


console.log(removeExclamationMarks("Hello World!!"))
