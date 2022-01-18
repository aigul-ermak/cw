function getMiddle(s)
{
    let arr = s.split('')
    let mid = Math.floor(arr.length / 2)
    return  arr.length % 2 !== 0 ? arr[mid] : arr[mid -1 ] + arr[mid]
}
