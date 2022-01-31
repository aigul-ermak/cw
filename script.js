function points(games) {
    let count = 0
    let a = games.map(g => {
        if (g[0] > g[2]) {
            count += 3
        } else if (g[0] === g[2]) {
            count += 1
        } else if (g[0] < g[2]) {
            count += 0
        }
    })
    return count
}



console.log(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]))
