/*

https://www.codewars.com/kata/596e4ef7b61e25981200009f/train/javascript

 */

function aspectRatio(x,y){
    let newAspectRatio = [Math.ceil(y * (16 / 9)), y];
    return newAspectRatio
}

console.log(aspectRatio(640, 480))
