//https://www.codewars.com/kata/5526fc09a1bbd946250002dc

//Find The Parity Outlier

function findOutlier(int){
    let arr1 = [];
    let arr2 = [];
    for (let i = 0; i < int.length; i++){
        if (int[i] % 2 !== 0) arr1.push(int[i]);
        else arr2.push(int[i]);
    }
    return (arr1.length > arr2.length)? arr2[0] : arr1[0];
}