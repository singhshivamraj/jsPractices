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



//Check if a number is palindrome. 


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


