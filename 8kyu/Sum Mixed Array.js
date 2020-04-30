//https://www.codewars.com/kata/57eaeb9578748ff92a000009
//Sum Mixed Array

function sumMix(x){
    let count = 0;
    for (let i = 0; i < x.length; i++){
        count+= (+x[i]);
    }
    return count;
}