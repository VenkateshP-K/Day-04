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
(var obj = {}
  var res = function(arr){
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
    var word = (function (str) {
      str = str.toLowerCase().split(' ');
      for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
      }
      return str.join(' ');
      })
      var str = ("guvi geek");
      console.log(word(str));

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
  var add = (function(arr){
      for(var i=0;i<arr.length;i++){
          (sum += arr[i])
      }
      return sum
  })
  var arr = ([12,34,23]);
  console.log(add(arr));

