function reverseWords(str) {
   let a = str.split(' ')
    return a.map((item) => item.toString().split('').reverse().join('')).join(' ')


}

console.log(reverseWords("This is an example!"))


