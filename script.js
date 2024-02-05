//1.Print Odd numbers in an array using anonymous function
var obj = {}
var res = function(arr){
for(var i=0;i<arr.length;i++){
if(arr[i]%2 != 0){
  obj[arr[i]] = "Odd"
}
}
return obj
}
var result = res([23,45,12,64]);
console.log(result);

//Print Odd numbers in an array using IIFE function

  (function(arr){
  for(var i=0;i<arr.length;i++){
  if(arr[i]%2 != 0){
    obj[arr[i]] = "Odd"
  }
  }
  return obj
  })
  var result = res([23,45,12,64]);
  console.log(result);

//2.Convert all the strings to title caps in a string array using anonymous function
  var word = function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
    }
    var str = ("guvi geek");
    console.log(word(str));

//Convert all the strings to title caps in a string array using IIFE function
    (function (str) {
      str = str.toLowerCase().split(' ');
      for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
      }
      return str.join(' ');
      })
      var str = ("guvi geek");
      console.log(str);

//3.Sum of all numbers in an array using anonymous function
      var sum = 0;
      var add = function(arr){
          for(var i=0;i<arr.length;i++){
              (sum += arr[i])
          }
          return sum
      }
      var arr = ([12,34,23]);
      console.log(add(arr));

//Sum of all numbers in an array using IIFE function
      var sum = 0;
  ((function(arr){
      for(var i=0;i<arr.length;i++){
          (sum += arr[i])
      }
      return sum
  }))
  var arr = ([12,34,23]);
  console.log(arr);

//4.print odd numbers in an array using anonymous function
var a = [12,23,9,17,24];
var prime = [];

function isPrime(item) {
    var identifier = item / 2;
      for (var j = 2; j <= identifier; j++) {
       if ((item % j) == 0) { // modulous
        return false;
       } 
     }
     return true;
}
for (var index = 0; index < a.length; index++) {
  if (isPrime(a[index])) {
      prime.push(a[index])
  }
}

console.log(prime);

//print prime numbers using IIFE function
var a = [12,23,9,17,24];
var prime = [];

(function isPrime(item) {
    var identifier = item / 2;
      for (var j = 2; j <= identifier; j++) {
       if ((item % j) == 0) { 
        return false;
       } 
     }
     return true;
})
 for(var index = 0; index < a.length; index++){
  if (isPrime(a[index])) {
      prime.push(a[index])
  }
}

console.log(prime);

//5.palindromes in an array using anonymous function
let isPalindrome = function () {
  var myArray = ['viicc', 'racecar', 'honda', 'malayalam'];
  var arr = myArray.filter(function (c, d) {
    var palindrome = c.split('').reverse().join('');
    if (c == palindrome) {
      console.log(myArray[d]);
    }
  });
}
isPalindrome()

//palindromes in an array using IIFE function
(function (isPalindrome) {
  var myArray = ['viicc', 'racecar', 'honda', 'malayalam'];
  var arr = myArray.filter(function (c, d) {
    var palindrome = c.split('').reverse().join('');
    if (c == palindrome) {
      console.log(myArray[d]);
    }
  });
})
isPalindrome()


//6.Return median of two sorted arrays of the same size using anonymous function
var median = function(a, b) {

  var c = [...a, ...b].sort((a, b) => a - b);

  const half = c.length / 2 | 0;
  
if (c.length % 2) {
  return c[half];
} else {
  
  return (c[half] + c[half - 1]) / 2;
}
}
var arr1 = [1, 12, 15, 23, 38, 24];
var arr2 = [2, 13, 18, 30, 44, 48];
console.log(median(arr1, arr2));

//Return median of two sorted arrays of the same size using IIFE
( function() {
  let arr1 = [1, 12, 15, 26, 38,24];
  let arr2 = [2, 13, 17, 30, 45, 47];
  
    let c = [...arr1, ...arr2].sort((arr1, arr2) => arr1 - arr2);
  
    const half = c.length / 2 | 0;
    
  if (c.length % 2) {
  console.log(c[half]);
  } else {
    
  console.log((c[half] + c[half - 1]) / 2);
  }
  
  })()

//7.Remove duplicates from an array using anonymous function
var findDuplicates = function () {
  
  var yourArray = [1, 1, 2, 3, 4, 5, 5]
  var duplicates = []
  var tempArray = [...yourArray].sort() 
  for (let i = 0; i < tempArray.length; i++) {
    if (tempArray[i + 1] === tempArray[i]) {
      duplicates.push(tempArray[i])
    }
  }
  console.log(duplicates) 
}
findDuplicates()

//Remove duplicates from an array using IIFE
(function () {
  
  let numbers = [1, 2, 3, 2, 4, 5, 5, 6];
  
  let duplicates = numbers.filter((item, index) => index !== numbers.indexOf(item));
  
  console.log(duplicates);
})()

//8.rotate an array 'k' times using anonymous function
var rotateArray =function(A, K) {
  if (A.length === K || K === 0) {
      return A;
  }
  K = K % A.length;
  for (let i = 0; i < K; i++) {
      A.unshift(A.pop());
  }
console.log(A)
}
rotateArray([1,2,3,4,5],2)

//rotate an array 'k' times using IIFE
(function(A, K) {
  if (A.length === K || K === 0) {
      return A;
  }
  K = K % A.length;
  for (let i = 0; i < K; i++) {
      A.unshift(A.pop());
  }
console.log(A)
})([1,2,3,4,5],2)

