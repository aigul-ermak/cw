/*
Given an input n, write a function always that returns a function which returns n. Ruby should return a lambda or a proc.

Link: https://www.codewars.com/kata/53844152aa6fc137d8000589/train/javascript

 */


function always (n) {
    return function() {
        return n
    }
}




