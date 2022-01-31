// function betterThanAverage(classPoints, yourPoints) {
//     let total = 0
//     for (let i = 0; i < classPoints.length; i++) {
//         total += classPoints[i]
//     }
//     let aver = total / classPoints.length
//     if (aver > yourPoints) {
//         return "False"
//     } else {
//         return "True"
//     }
// }


function betterThanAverage(classPoints, yourPoints) {
   return yourPoints > classPoints.reduce((a,b) => a + b, 0)/classPoints.length
}




console.log(betterThanAverage([2, 3], 5))
