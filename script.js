function well(x) {
    let count = 0;
    for (let i = 0; i <= x.length; i++) {
        if (x[i] === 'good') {
            count ++
        }
    }
    if(count <= 2 && count > 0) {
        return "Publish!"
    }
    if(count > 2) {
        return "I smell a series!"
    }
    if(count <= 0) {
        return "Fail!"
    }
}
