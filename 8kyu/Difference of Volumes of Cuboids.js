//https://www.codewars.com/kata/58cb43f4256836ed95000f97

//Difference of Volumes of Cuboids

function findDifference(a, b) {
    let s1 = 1;
    let s2 = 1;
    for (let i = 0; i < a.length; i++){
        s1 *= a[i];
        s2 *= b[i];
    }
    return Math.abs(s1 - s2);
}