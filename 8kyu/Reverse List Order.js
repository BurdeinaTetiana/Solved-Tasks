//https://www.codewars.com/kata/53da6d8d112bd1a0dc00008b
//Reverse List Order

function reverseList(list) {
    let arr = [];
    for (let i = list.length - 1; i >= 0; i--){
        arr.push(list[i]);
    }
    return arr;
}