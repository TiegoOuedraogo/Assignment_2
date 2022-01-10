let r2=[2,3,4,5,6]
const UsingSome = (callback,arr)=>{
  for(let i = 0; i<arr.length;i++){
    if(callback(arr[i])){  
      return true;
    }
    }
    return false;
  }

 console.log(UsingSome((element)=>{return element == 9},r2));

 const mySome =(array,callback)=>{
  for(let i=0; i<array.length; i++){
      if(callback(array[i])){
          return true;
      }
  }
  return false;
}

//test the function mySome
const numbers =[1,2,3,4,5]
console.log(mySome(numbers,(element)=>element === 6))