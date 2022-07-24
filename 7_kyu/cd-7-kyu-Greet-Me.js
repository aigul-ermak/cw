/*

Link: https://www.codewars.com/kata/535474308bb336c9980006f2/train/javascript

 */

var greet = function (name) {
    let a = name.split('').splice(0, 1).toString().toUpperCase()
    let b = name.split('').slice(1).join('').toLowerCase();
    return `Hello ${a.concat(b)}!`
};


console.log(greet('JACK'))


