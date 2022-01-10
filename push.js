const fruits = ["Banana", "Orange", "Apple", "Mango"];
const myPush = (arr,items)=>{
  
  arr[arr.length]=items
return arr.length;
}
//fruits.push;
console.log("the new length is: ",myPush(fruits,"peaches"))
console.log(fruits)