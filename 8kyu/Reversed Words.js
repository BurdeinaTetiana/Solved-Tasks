//https://www.codewars.com/kata/51c8991dee245d7ddf00000e

//Reversed Words

function reverseWords(str){
    console.log(str);
    const words = str.split(' ');
    const arr = [];
    for (let i = words.length-1; i >= 0; i--){
        arr.push(words[i]);
    }
    return arr.join(' ');
}