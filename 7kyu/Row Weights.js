//https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9

//Row Weights

function rowWeights(array){
    let sumTim1 = 0;
    let sumTim2 = 0;
    for (let i = 0; i < array.length; i++){
        if (i % 2 === 0) sumTim1 += array[i];
        else sumTim2 += array[i];
    }
    return [sumTim1,sumTim2];
}