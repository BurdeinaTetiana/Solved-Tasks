//https://www.codewars.com/kata/545a4c5a61aa4c6916000755

//Find the middle element

function gimme(arr){
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > min && arr[i] < max)
            return i;
    }
};

