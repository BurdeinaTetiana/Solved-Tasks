//https://www.codewars.com/kata/57b58827d2a31c57720012e8

//Fuel Calculator

function fuelPrice(l, pL) {
    let price;
    if (l < 2) price = l * pL;
    else if (l < 4) price = l * (pL - 0.05);
    else if (l < 6) price = l * (pL - 0.10);
    else if (l < 8) price = l * (pL - 0.15);
    else if (l < 10) price = l * (pL - 0.20);
    else price = l * (pL - 0.25);
    return +price.toFixed(2);
}