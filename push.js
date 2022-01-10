const fruits = ["Banana", "Orange", "Apple", "Mango"];
const myFruits = (callback,arr)=>{
  let new_Fruits =["Kiwi", "Lemon", "Pineapple"];
  for(let i=0; i < arr.length;i++){
    new_Fruits.push(callback(arr[i]))
  }
return new_Fruits;
}
//fruits.push;
console.log(myFruits((element)=>{return element},fruits))