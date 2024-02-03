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

  2.Convert all the strings to title caps in a string array