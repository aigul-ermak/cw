function describeTheShape(angles) {
    let sum = 180 * (angles - 2)
    let oneAngle = Math.round(sum / angles)
    if (angles <= 2) {
        return 'this will be a line segment or a dot'
    } else {
        return `This shape has ${angles} sides and each angle measures ${oneAngle}`
    }


}

console.log(describeTheShape(3))
