/*

Link: https://www.codewars.com/kata/5645fda2956e462b5100005e/train/javascript

 */

Array.prototype.valueOf = function () {
    return this.length > 0 ? this.reduce((acc, element) => acc + element) : 0
}


