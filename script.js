const rps = (p1, p2) => {
    let getMsg = ''
    if( p1 == 'scissors' && p2 == 'paper' || p1 == 'rock' && p2 == 'scissors' ||  p1 == 'paper' && p2 == 'rock' ) {
        return getMsg = 'Player 1 won!'
    }
    if (p1 == 'scissors' && p2 == 'rock' || p1 == 'paper' && p2 == 'scissors' || p1 == 'rock' && p2 == 'paper') {
        return getMsg = 'Player 2 won!'
    }
    if (p1 == 'paper' && p2 == 'paper' || p1 == 'scissors' && p2 == 'scissors' || p1 == 'rock' && p2 == 'rock') {
        return getMsg = 'Draw!'
    }
};
