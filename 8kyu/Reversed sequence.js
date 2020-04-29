//https://www.codewars.com/kata/5a00e05cc374cb34d100000d
//Reversed sequence

function  reverseSeq(n){
    let res = [];
    for (let i = n; i >= 1; i--){
        res.push(i);
    }
    return res;
};