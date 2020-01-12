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
```javascript
function howMuchILoveYou(nbPetals) {
    let choices = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
    let times = (nbPetals-1) % 6;
    return choices[times];
}
```
### Find the Slope
https://www.codewars.com/kata/55a75e2d0803fea18f00009d
```javascript
function slope(points){
  if(points[2]-points[0] === 0) {return 'undefined'}
  else{ return String((+ points[3]-points[1]) / (points[2]-points[0]))}
}
```
### Sum of angles
https://www.codewars.com/kata/5a03b3f6a1c9040084001765
```javascript
function angle(n) {
  return 180*(n-2);
}
```
### Third Angle of a Triangle
https://www.codewars.com/kata/5a023c426975981341000014
```javascript
function otherAngle(a, b) {
  return 180-(a+b);
}
```
### Squash the bugs
https://www.codewars.com/kata/56f173a35b91399a05000cb7
```javascript
function findLongest(str) {
  
  var spl = str.split(" ");
  var longest = 0;
  
  for (let i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length;
    }
  }

  return longest;
}
```
### Will you make it?
https://www.codewars.com/kata/5861d28f124b35723e00005e
```javascript
function zeroFuel (distanceToPump, mpg, fuelLeft) {
  return distanceToPump <= mpg * fuelLeft
}
```
### Arrays Similar
https://www.codewars.com/kata/51e704f2d8dbace389000279
```javascript
function arraysSimilar(arr1, arr2) {
  return JSON.stringify(arr1.sort()) === JSON.stringify(arr2.sort());
}
```
### Calculate Price Excluding VAT
https://www.codewars.com/kata/5890d8bc9f0f422cf200006b
```javascript
function excludingVatPrice(price){
    let prodPr = 0;
    if ( price === null ) {
        return -1;
    } else {
        prodPr = (100 * price)/115;
        return +prodPr.toFixed(2);
    }
}
```
### Remove First and Last Character
https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0
```javascript
function removeChar(str){
 return str.substring(1, str.length-1);
};
```
### Convert number to reversed array of digits
Convert number to reversed array of digits
```javascript
function digitize(n) {
  const str = n.toString();
  const arr = [];
  for(let i = str.length - 1; i >= 0; i--){
    arr.push(+str[i])
  }
  return arr;
}
```
### What's up next?
https://www.codewars.com/kata/542ebbdb494db239f8000046
```javascript
function nextItem(xs, item) {
let isFound = false;  
  for (let el of xs) {
    if (isFound) return el;
    if (el == item) isFound = true;
  }
 } 
```
### Remove exclamation marks
https://www.codewars.com/kata/57a0885cbb9944e24c00008e
```javascript
function removeExclamationMarks(s) {
let str ='';
for (let el of s ){
if (el !== '!')str += el;
}
  return str;
}
```