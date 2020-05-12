//https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/solutions/javascript

//Shortest Word

function findShort(s){
    s = s.split(' ');
    let arr = [];
    for (let i = 0; i < s.length; i++){
        arr.push(s[i].length)
    }
    let min = arr[0];
    for (let  i = 1; i < arr.length; i++){
        if (min > arr[i]) min = arr[i];
    }
    return min;
}

