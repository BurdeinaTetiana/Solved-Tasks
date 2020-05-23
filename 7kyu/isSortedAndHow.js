//https://www.codewars.com/kata/580a4734d6df748060000045

//Sorted? yes? no? how?

function isSortedAndHow(arr) {
    if (arr[1] > arr[0]) return 'yes, ascending';
    if (arr[1] > arr[2]) return 'yes, descending';
    else return 'no';
}