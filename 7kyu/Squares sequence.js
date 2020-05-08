//https://www.codewars.com/kata/5546180ca783b6d2d5000062

//Squares sequence

function squares(x, n) {
    let arr = [];
    for (let i = 0; i < n; i++){
        arr.push(x);
        x = x * x;
    }
    return arr;
}