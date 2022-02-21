function sumArray(array) {
    debugger

   if( !array) {
       return 0
   } else if (array.length < 0) {
       return 0
   } else {
       array = array.sort((a, b) => a - b)
       var total = 0
       for (var i = 1; i < array.length - 1; i++) {
           total += array[i]
       }
       return total
   }

}


console.log(sumArray([ -6, -20, -1, -10, -12]))


// function palindrome (str) {
//     var re = /[^A-Za-z0-9]/g
//     str = str.toLowerCase().replace(re, '')
//     var len = str.length
//     for (let i = 0; i < len/2; i++) {
//         if(str[i] !== str[len - 1 - i]) {
//             return false
//         }
//     }
//     return true
//
// }
//
// console.log(palindrome("A man, a pl, a canal. Panama"))
