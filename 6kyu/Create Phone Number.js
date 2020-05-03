//https://www.codewars.com/kata/525f50e3b73515a6db000b83/solutions/javascript

//Create Phone Number

function createPhoneNumber(n){
    let str = '(xxx) xxx-xxxx';
    for(let i = 0; i < n.length; i++){
        str = str.replace(/x/, n[i]);
    }
    return str;
}