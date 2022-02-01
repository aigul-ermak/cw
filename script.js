function accum(s) {
   let a = s
       .split('')
       .map((l, i) => l.toUpperCase() + l.repeat(i).toLowerCase())

   return a.join('-')
}






console.log(accum("abcd"))
