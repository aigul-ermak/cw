/*
Your friend has been out shopping for puppies (what a time to be alive!)...
He arrives back with multiple dogs, and you simply do not know how to respond!

By repairing the function provided, you will find out exactly how you should respond,
depending on the number of dogs he has.

The number of dogs will always be a number and there will always be at least 1 dog.

Link: https://www.codewars.com/kata/56f6919a6b88de18ff000b36/train/javascript

 */


function howManyDalmatians(number) {
    if (number <= 10) {
        return respond = "Hardly any";
    } else if (number <= 50) {
        return respond = "More than a handful!";
    } else if (number === 101) {
        return respond = "101 DALMATIANS!!!";
    } else {
        return respond = "Woah that's a lot of dogs!";
    }
}

console.log( howManyDalmatians(10))
