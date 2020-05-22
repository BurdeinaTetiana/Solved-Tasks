//https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e

//Sum of differences in array

function sumOfDifferences(arr) {
    const sorted = arr.sort((a,b) => b - a); //Отсортировываем массив по убыванию
    let sum = 0;
    for (let i = 1; i < sorted.length; i++) {
        sum += sorted[i - 1] - sorted[i];
    }
    return sum;
}