//https://www.codewars.com/kata/57f222ce69e09c3630000212
//Well of Ideas - Easy Version

function well(x){
    let str = 0;
    for (let i = 0; i < x.length; i++){
        if (x[i] !== 'bad') str = str + 1;
    }
    if (str === 0) return 'Fail!';
    if (str === 1 || str === 2) return 'Publish!';
    if (str > 2) return 'I smell a series!';
}