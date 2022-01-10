const array1 = [2,45,5,67,89,12];
const myFor_Each = function(callback, arr){
  for(let i= 0; i<arr.length;i++){
    callback(arr[i],i ,arr);
    

  }
}

myFor_Each (function(element,i,arr){console.log(element)},array1);

const myForEach =(array,callback)=>{
  for(let i=0; i<array.length; i++){
      callback(array[i])
  }
}
//test the function myForEach
const veggies =['olives', 'tomato', 'feta cheese', 'green-pepper']
console.log(myForEach(veggies,(element)=>{console.log(element)}))