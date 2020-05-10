//https://www.codewars.com/kata/554b4ac871d6813a03000035

//Highest and Lowest

function highAndLow(num){
    let arr = num.split(' ');
    let max = +arr[0];
    let min = +arr[0];
    for (let i = 1; i < arr.length; i++){
        if (+arr[i] < min) min = arr[i];
        if (+arr[i] > max) max = arr[i];

    }
    return max + ' '+ min;
}