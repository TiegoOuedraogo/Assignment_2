const myFindIndex =(array,callback)=>{
  for(let i=0; i<array.length; i++){
      if(callback(array[i])){
          return i;
      }
  }
  return -1;
}
//test the function myFindIndex
const numbers =[1,2,3,4,5]
console.log(myFindIndex(numbers,(element)=>element == 5))