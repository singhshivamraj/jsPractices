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

