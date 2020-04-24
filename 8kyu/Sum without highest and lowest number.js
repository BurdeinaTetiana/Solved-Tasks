//https://www.codewars.com/kata/576b93db1129fcf2200001e6/solutions/javascript
//Sum without highest and lowest number

function sumArray(arr) {
    if(arr == null) return 0;
    let count = 0;
    arr.sort(function(a,b){
        return a - b;
    })
    for(let i = 1; i < arr.length-1; i++){
        count += arr[i];
    }
    return count;
}

