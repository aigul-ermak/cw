function fakeBin(x) {
    let res = x.replace(/1|4|2|3/gi, '0')
    let res1 = res.replace(/5|6|7|8|9/gi, '1')
    return res1;
}

console.log(fakeBin('45385593107843568'))
