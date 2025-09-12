/*question(1) Print all numbers from 1 to 100. 

for(let i = 0; i<= 100; i++ ){
  console.log(i);
  
}*/


/* question(2)Print all even numbers from 1 to 100. 

for(let i = 0; i<= 100; i++){
  if (i % 2 === 0) {
   console.log(i);
   
    
  }
}*/




/*  question(3)Print odd numbers from 1 to 100. 


for(let i = 0; i<= 100; i++){
  if (i % 2 !== 0) {
    console.log(i);
    
  }
}*/



/* question(4)Find the sum of first 50 natural numbers.
let num = 0;
 for (let i = 0; i<= 50; i++ ){
num += i;

}
console.log(num);
*/


/*.question(5) Find the factorial of a number.
const number = (n) =>{
  if (n === 0 || n === 1) {
    return 1;
  }
  let fact = 1;
  for(let i = 2; i<= n ; i++){
    fact *= i;
  }
  return fact;
  
}
console.log(number(5));

*/




/* question(6) Find whether a number is prime or not. 

let number = parseInt(prompt("enter a number"))


if (number % 2 === 0) {
  console.log('number is prime');
  
}else{
  console.log('number is not prime');
  
}*/



/* question(7) Print first 10 prime numbers. 

for(let i = 0; i<= 10; i++){
  if(i % 2 === 0){
    console.log(i);
    
  }
}
  */


/* question(8) Reverse a given number.
let reverseNumber = (n) =>{
  let Reverse = 0;
  while(n > 0){
    let digit = n % 10;
    Reverse = Reverse * 10 + digit;
    n = Math.floor(n / 10)
  }
  return Reverse;
}
console.log(reverseNumber(12345));
*/



/* question(9) Check if a number is palindrome. 


const palindrome = (num) =>{
 let firstNum = num;
 let secNum = 0;

 while(num > 0){
  let digit = num % 10;
  secNum = secNum  * 10 + digit;
  num = Math.floor(num / 10);

 }
 return firstNum === secNum;
}

console.log(palindrome(121));
*/



/*  question(10) Find greatest of 3 numbers. 

let a = 10
let b = 12
let c = 122

if(a >= b && a >= c){
  console.log(" a is grtest number", a);
  
}else if(b >= a && b >= c){
console.log('b is grater than all', b);

} else if(c >= a && c >= b){
  console.log('c is grater than all', c);
  
}

*/


/*  question(11)  Find smallest of 3 numbers. 

let number1 = parseInt(prompt("Enter Any Number"))
let number2 = parseInt(prompt("Enter Any Number"))
let number3 = parseInt(prompt("Enter Any Number"))

if (number1 < number2 &&  number1 < number3 ) {
  console.log('A Number is smallest', number1);
  
}else if(number2 < number1 && number2 < 3){
  console.log(' B number is smallest ', number2);
  
}else if(number3 < number1 && number3 < number1){
  console.log('C is smallest number', number3);
  
}
*/



/* question(12) Swap two numbers without using third variable. 
let a = 5
let b = 32

a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log('a', a, 'b', b);
*/

/* question(13)  Print multiplication table of a number. 
let num = 50;

for (let i = 1 ; i <= 10; i++) {
    console.log(`${num} x ${i}  =  ${num * i}`);
    
}
    */



/*  question(14) Find sum of digits of a number.

const  SumNumber = (num) =>{
let sum = 0;
while(num > 0){
  let digit = num % 10;
  sum += digit
  num = Math.floor(num / 10)
}
return sum;
}
console.log(SumNumber(2345))
*/

/* Find product of digits of a number.

const productNumber = (num) =>{
let product = 1;
while(num > 0){
  let digit = num % 10;
  product *= digit
  num = Math.floor(num / 10)
}
return product
}
console.log(productNumber(789))
*/



/* Count number of digits in a number. 

const numberDigit = (num) =>{
let count = 0;
while(num > 0){
// let digit = num % 10;
 num = Math.floor(num / 10)
 count++
}
return count
}

console.log(numberDigit(123456));
*/


/*question(17)Find LCM of two numbers. 
const gcd = (a, b) =>{
  while(b !== 0){
    let temp = b;
    b = a % b;
    a = temp
  }
  return a
}
function lcm(a, b){
  return (a * b) / gcd(a, b)
}

console.log(lcm(12, 13));
console.log(lcm(14, 45));
*/


/* question(18) Find GCD of two numbers. 

function gcd(a, b){
  while(b !== 0){
let temp = b;
b = a % b;
a = temp
  }
  return a
}
console.log(gcd(12, 18));
*/

/* question(23)  Check if a number is Armstrong.

function isArmstrong(num){
let sum = 0;
let temp = num;
let digits = num.toString().length;

while(temp > 0){
  let digit = temp % 10;
  sum += Math.pow(digit, digits);
  temp = Math.floor(temp / 10);
}

return sum === num
}

let number = 154;

if(isArmstrong(number)){
  console.log(number + " is an armstrong number");

  
}else{
  console.log(number + " is not an armstrong number");
  
}
*/

/* question(29)  Convert decimal to binary.

 const decimalBinary = (num)=>{
let binary = "";
if(num === 0){
  return 0;
}
while (num > 0){
  let remainder = num % 2;
  binary = remainder + binary;
  num = Math.floor(num / 2);
}
return binary;
 }

 let number = 10;
 console.log("Decimal", number);
 console.log("Binary", decimalBinary(number));
 
*/


/* question(35) Generate random number between 1 and 100

let number = Math.floor(Math.random()  ) ;
console.log(number);

console.log(Math.floor(Math.random() * 100 ) + 1) ;


*/
 /*question(38) Find whether a year is leap year. 

const leapyear = (year) =>{
  if ((year % 4 === 0 && year !== 100) || (year % 400 === 0)) {
    console.log(year + " yes this is leap year");
    
  }else{
    console.log(year + " Not leap year");
    
  }
}
leapyear(2000)
leapyear(1999)
leapyear(2024)
leapyear(2030)

*/



                   //  STRING START 


/* Reverse a string without built-in functions.
           
//  function reverseNumber(str){
// let Reversed = "";
// for(let i = str.length - 1; i >= 0; i--){
//   Reversed = Reversed + str[i];
// }
// return Reversed
//  }
//  let result = reverseNumber("hellow");
//   console.log(result);
     */
    

/* Find length of a string without .length. 

function strLength(str){
  let count = 0;
  while(str[count] !== undefined){
count++;
  }
  return  count
}

let result = strLength("hello");
console.log(result);
*/
