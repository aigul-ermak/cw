function gimme(triplet) {

    let b = [...triplet].sort((a, b) => a - b)

    let a = triplet.indexOf(b[b.length - 2])
return a
}


console.log(gimme([-2, -3, -1]))
