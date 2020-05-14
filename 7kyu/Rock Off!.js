//https://www.codewars.com/kata/5b097da6c3323ac067000036

//Rock Off!

function solve(a, b) {
    let sA = 0;
    let sB = 0;
    for (let i = 0; i < a.length; i++){
        if (a[i] > b[i]) sA++;
        if (a[i] < b[i]) sB++;
    }
    if (sA > sB) return `${sA}, ${sB}: Alice made "Kurt" proud!`;
    else if (sA < sB) return `${sA}, ${sB}: Bob made "Jeff" proud!`;
    else return `${sA}, ${sB}: that looks like a "draw"! Rock on!`;
}