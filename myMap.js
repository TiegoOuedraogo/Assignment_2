const array = [1, 4, 9, 16];
const My_Map = (callback, arr)=>{
  let array1 = [];
  for(let i=0;i<arr.length;i++){
    array1.push(callback(arr[i])) 
    
  }
  return array1;
}

console.log(My_Map(
  (element)=> { 
  return(element*2)
}, array));

const myMap =(array,callback)=>{
  let result =[];
  for(let i=0; i<array.length; i++){
      let newElem = callback(array[i])
      result.push(newElem)
  }
  return result;
}
//test the function myFilter
const veggies =['olives', 'tomato', 'feta cheese', 'green-pepper']
console.log(myMap(veggies,(element)=> 100+" "+element))
