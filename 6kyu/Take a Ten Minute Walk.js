//https://www.codewars.com/kata/54da539698b8a2ad76000228

//Take a Ten Minute Walk

function isValidWalk(arr) {
    if (arr.length !== 10) return false;
    let n = 0;
    let w = 0;
    let s = 0;
    let e = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === 'n') n++;
        if (arr[i] === 's') s++;
        if (arr[i] === 'w') w++;
        if (arr[i] === 'e') e++;
    }
    return n === s  && w === e;
}