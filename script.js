function enough(cap, on, wait) {
    if (cap > (on + wait)) {
        return 0
    } else if  ( cap === (on + wait)) {
        return 0
    } else if( cap < (on + wait)) {
        return (on + wait) - cap
    }

}

console.log(enough(10, 5, 5))



