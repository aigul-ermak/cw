function findNeedle(haystack) {
let position = haystack.indexOf('needle');
let message = ''

    for (let i = 0; i < haystack.length ; i++) {
        if(haystack[i] === 'needle') {
            return message = `found the needle at position ${position}`
        }
    }


}

console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']))


// "found the needle at position 5"
//
// index
