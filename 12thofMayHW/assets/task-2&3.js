function nthFibbonacci(num) { 
let num1 = 0;
 let num2 = 1;
 let sum;
 let i=0;
 for ( i = 0; i < num; i++) {
     sum = num1 + num2;
     num1 = num2;
     num2 = sum;
 }
 return num2;
}

let number = prompt("Enter a number");
console.log(nthFibbonacci(number));
