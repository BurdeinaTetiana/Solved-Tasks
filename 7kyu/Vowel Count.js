//https://www.codewars.com/kata/54ff3102c1bad923760001f3

//Vowel Count

function getCount(str) {
    let count = 0;
    let vowel = ['a','e','i','o','u'];
    for (let i = 0; i < str.length; i++){
        if (vowel.includes(str[i]))
            count++;
    }
    return count;
}