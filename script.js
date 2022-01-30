function areYouPlayingBanjo(name) {
    let n = name.split('')
    if (n[0] === 'R' | n[0] === 'r') {
        return `${name} plays banjo`
    } else {
        return `${name} does not play banjo`
    }

}



