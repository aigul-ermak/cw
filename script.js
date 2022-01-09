function peopleWithAgeDrink(old) {
    let answer = "";

    if (old < 14) {
        return answer = "drink toddy"
    } else if (old >= 14 && old <= 17) {
        return answer = "drink coke"
    } else if (old > 17 && old < 21) {
        return answer = "drink beer"
    } else {
        return answer = "drink whisky"
    }


};

console.log(peopleWithAgeDrink(30))
