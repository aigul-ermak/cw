/*

Link: https://www.codewars.com/kata/541da001259d9ca85d000688/train/javascript

 */

const seqlist = (first,c,l) =>
  Array.from({length: l}, (value, index) => first + c * index)


console.log(seqlist(0,2,20))


