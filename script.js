const func = (date1, date2) => {
    let a = date1.split('/');
    let b = date2.split('/');


    if (a[0] < b[0]) {
        c = +(b[0] - a[0])
    } else {
        c = +(a[0] -b[0])
    }
    return c;

}

console.log(func('1997/10/10', '2015/10/10'))
