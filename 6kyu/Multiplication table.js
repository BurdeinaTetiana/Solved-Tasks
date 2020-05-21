//https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08

//Multiplication table

multiplicationTable = function(size) {
    const arr = [];
    for (let i = 1; i <= size; i++){
        const arrNuw = [];
        for (let j = 1; j <= size; j++){
            arrNuw.push(i * j);
        }
        arr.push(arrNuw);
    }
    return arr;
}

