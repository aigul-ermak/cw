function friend(friends){
   let a = friends.filter(f => f.length === 4)
    return a
}
console.log(friend(["Ryan", "Kieran", "Mark"] ))
