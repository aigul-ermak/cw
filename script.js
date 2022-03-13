"use strict";


function flattenAndSort(array) {
    let a = array.reduce((acc, i) => {
       acc =  [...acc, ...i]
        return acc
    }, [])

    return a.sort((a, b) => a - b)
}


console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]))
