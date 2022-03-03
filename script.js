function replace(s){
  let re = /[aeiouAEIOU]/gi
    return s.replace(re, '!')
}

console.log(replace("Hi!"))
