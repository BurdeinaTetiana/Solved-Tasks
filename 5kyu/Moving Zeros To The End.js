//https://www.codewars.com/kata/52597aa56021e91c93000cb0

//Moving Zeros To The End

var moveZeros = function (arr) {
    const arrNuw = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) arrNuw.push(arr[i]);
    }
    let count = arr.length - arrNuw.length;
    for (let i = 0; i < count; i++){
        arrNuw.push(0);
    }
    return arrNuw;
}