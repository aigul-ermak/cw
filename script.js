function filter_list(l) {

    return l.filter(f => typeof f === 'number' )

}

console.log(filter_list([1,'a','b',0,15]))
