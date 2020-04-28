//https://www.codewars.com/kata/586c1cf4b98de0399300001d
//Grasshopper - Terminal game combat function

function combat(health, damage) {
    let res =  health - damage;
    if (res < 0) return 0;
    else return res;
}