# Solved-Tasks
### Convert a string to an array
https://www.codewars.com/kata/57e76bc428d6fbc2d500036d
```javascript
function stringToArray(string){
  return string.split(' ');
}
```
### Type of sum
https://www.codewars.com/kata/5a2e9ae2b6cfd7692a0000ba
```javascript
function typeOfSum(a, b) {
  return typeof(a + b);
}
```
### Breaking chocolate problem
https://www.codewars.com/kata/534ea96ebb17181947000ada/solutions/javascript/me/best_practice
```javascript
function breakChocolate(n,m) {
if ( n <= 0 || m <= 0 ) {
return 0;
}
  return n * m - 1;
}
```
### Training JS #1: create your first JS function and print "Helloworld!"
https://www.codewars.com/kata/training-js-number-1-create-your-first-js-function-and-print-helloworld/solutions/javascript/me/best_practice
```javascript
function helloWorld(){
var str = "Hello World!";
console.log(str);
  return str;
}
```
###Training JS #2: Basic data types--Number
https://www.codewars.com/kata/571edd157e8954bab500032d
```javascript
var v1=50;v2=100,v3=150,v4=200,v5=2,v6=250
function equal1(){
  var a=v1;
  var b=v1;
  return a+b;
}
//Please refer to the example above to complete the following functions
function equal2(){
  var a=v3;   //set number value to a
  var b=v1;   //set number value to b
  return a-b;
}
function equal3(){
  var a=v1;   //set number value to a
  var b=v5;   //set number value to b
  return a*b;
}
function equal4(){
  var a=v4;   //set number value to a
  var b=v5;   //set number value to b
  return a/b;
}
function equal5(){
  var a=v6;   //set number value to a
  var b=v3;   //set number value to b
  return a%b;
}
```
###Find the position!
https://www.codewars.com/kata/5808e2006b65bff35500008f/solutions/javascript/me/best_practice
```javascript
function position(letter){
let str = ' abcdefghijklmnopqrstuvwxyz';
return "Position of alphabet: " + str.indexOf(letter);
}
```
###Grasshopper - Make change
https://www.codewars.com/kata/560dab9f8b50f89fd6000070
```javascript
let money = 10;
let candy = 1.42;
let chips = 2.40;
let soda  = 1;
let change = money - candy - chips - soda;
```
### Beginner Series #2 Clock
https://www.codewars.com/kata/beginner-series-number-2-clock/solutions/javascript/me/best_practice
```javascript
function past(h, m, s){
  return ((h*3600)+(m*60)+s)*1000;
}
```
### I love you, a little , a lot, passionately ... not at all
https://www.codewars.com/kata/i-love-you-a-little-a-lot-passionately-dot-dot-dot-not-at-all
function howMuchILoveYou(nbPetals) {
    let choices = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
    let times = (nbPetals-1) % 6;
    return choices[times];
}
```javascript

```
