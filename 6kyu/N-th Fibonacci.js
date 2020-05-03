//https://www.codewars.com/kata/522551eee9abb932420004a0

//N-th Fibonacci

function nthFibo(n) {
    let arr = [0, 1];
    for( let i = 2; i <= n ; i++){
        arr[i] = arr[i-1] + arr[i-2]
    }
    return arr[n-1]
}