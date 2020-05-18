//https://www.codewars.com/kata/563cf89eb4747c5fb100001b

//Remove the minimum

function removeSmallest(n) {
    let arr = n.slice();
    let min = Math.min(...n);
    let index = n.indexOf(min)
    arr.splice(index,1);
    return arr;
}