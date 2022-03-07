function reverseLetter(str) {
   // let a = str.replace(/[0-9]+/gi, '').split('').reverse().join('')
   let a = str.replace(/[^A-Za-z]+/gi, '').split('').reverse().join('')
   return a.replace(' ', '')


}
console.log(reverseLetter("=98xgu29zttr6ogupcxu6pydbot\\\\jkm{ ol=x5aqmllk8vw9"))



