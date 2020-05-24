//https://www.codewars.com/kata/5733f948d780e27df6000e33

//Training JS #34: methods of Math---pow() sqrt() and cbrt()

function cutCube(volume,n){
    return  Math.cbrt(n) % 1 === 0 && Math.cbrt(volume / n) % 1 === 0;
}