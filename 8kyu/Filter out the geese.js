//https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7

//Filter out the geese

function gooseFilter (arr) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    let birds = [];
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < geese.length; j++){
            if (geese[j] === arr[i]) break;
            if (geese[j] !== arr[i] && geese[j] === geese[geese.length -1]) birds.push(arr[i]);
        }
    }
    return birds;
}