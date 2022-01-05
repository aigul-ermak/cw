function dutyFree(normPrice, discount, hol){
let bott;
return bott=Math.floor(hol / ((normPrice * discount) / 100));

}


console.log(dutyFree(17, 10 ,500));
