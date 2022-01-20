function past(h, m, s){
   let mS = (h * 60 * 60 * 1000) + (m * 60 *1000) + (s *1000)
    return mS
}

console.log(past(1, 0, 1))
