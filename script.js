function sentencify(words) {

    return  `${words.join(' ').replace(/^[a-z]/, firstLetter => firstLetter.toUpperCase())}.`
}

console.log(sentencify(["FIELDS","of","CORN","are","to","be","sown"]))
