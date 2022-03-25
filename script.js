function bump(x){
let a = x.split('');
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] === 'n') {
            count  += 1
        }
    }
    return count > 15 ? 'Car Dead' : 'Woohoo!'
}


console.log(bump('______n___n_'))
