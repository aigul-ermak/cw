function number(array) {
 return array.map ((a, i) => {
     return  `${i+1}: ${a}`
 })

}


console.log(number(["a", "b", "c"]))
