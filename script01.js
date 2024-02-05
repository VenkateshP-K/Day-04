//odd numbers in an array using arrow function
var isOdd = (n) => (n & 1) === 1;
var num = [12,33,57,34];
console.log( `Odd numbers are ${ num.filter( n => isOdd(n))}` );

//title caps in a string array
function toTitleCase(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
 }
var inputString = "guvi geek";
var titleCaseString = toTitleCase(inputString);
console.log(titleCaseString);

//sum of al numbers in an array
var arr = [12,22,23,34];
var res = arr.reduce((a,b)=>a+b,0);
console.log(res);

//pint odd numbers in an array
var number = [12,11,23,24]
var number = number.filter((myArray) => {
for (let i = 2; i <= Math.sqrt(myArray); i++) {
if (myArray % i === 0) {
return false;
}
return true;
}
});
console.log(number);

//palindromes in an array
var arr = ['racecar', 'coffee', 65456, 'did', 'cannot'];
let isPalindrome = words => {
   let str = String(words);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      }
      else {
         return false;
      }
   }
   return true;
};
var findPalindrome = arr => {
   return arr.filter(words => isPalindrome(words));
};
console.log(findPalindrome(arr));