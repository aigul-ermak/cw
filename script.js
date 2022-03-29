var questions = [
    {
        question: "What's the currency of the USA?",
        choices: ["US dollar", "Ruble", "Horses", "Gold"],
        corAnswer: 0
    },
    {
        question: "Where was the American Declaration of Independence signed?",
        choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
        corAnswer: 0
    }];


// function addAnswer(array, property, value) {
//     return array.map(m => ({...m, [property]: value}));
// }

questions.forEach(function(q) {
    q.usersAnswer = null
})



console.log(questions)
// console.log(questions[0].usersAnswer === null)
