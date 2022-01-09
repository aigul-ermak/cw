const removeConsecutiveDuplicates = (s) => {
    let newS = s.split(' ');
    let newArr = [];
    for (let i = 0; i <= newS.length; i++) {
        if (newS[i] !== newS[i + 1]) {
            newArr.push(newS[i])
        }
    }

    return newArr.join(' ');
}


console.log(removeConsecutiveDuplicates("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"))
