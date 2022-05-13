/*

Link: https://www.codewars.com/kata/56f3f6a82010832b02000f38/train/javascript

 */


const describeAge=(age) => {
    let s = "You're a(n)"
    return(age<13)?`${s} kid`:(age<18)?`${s} teenager`:(age<65)?`${s} adult`:`${s} elderly`
}

console.log(describeAge(77))
