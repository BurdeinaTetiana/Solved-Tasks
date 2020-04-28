//https://www.codewars.com/kata/555086d53eac039a2a000083
//Opposites Attract

function lovefunc(flower1, flower2){
    res = flower1 + flower2;
    if (res % 2 !== 0) return true;
    else return false;
}