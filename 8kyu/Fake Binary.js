//https://www.codewars.com/kata/57eae65a4321032ce000002d
//Fake Binary

function fakeBin(x){
    let str = '';
    for (let i = 0; i < x.length; i++){
        if (x[i] < 5) str+= 0;
        else str+= 1;
    }
    return str;
}