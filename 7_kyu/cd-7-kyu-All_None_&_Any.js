/*

Link: https://www.codewars.com/kata/54589f3b52756d34d6000158/train/javascript

 */

Array.prototype.all = function (p) {
    return this.filter(p).length == this.length;
};

Array.prototype.none = function (p) {
    return this.filter(p).length == 0;
};

Array.prototype.any = function (p) {
    return this.filter(p).length > 0;
};



