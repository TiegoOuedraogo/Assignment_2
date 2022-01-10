const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const myFilter1 = (arr,callback) => {
  let result1 = [];
  for (let i = 0; i < arr.length; i++) {
    if(callback(arr[i])){
      result1.push(arr[i])
  }
  }
  return result1;
};
//test the function myFilter1
console.log(
  myFilter1(words,(element) => {
    return element.length <= 6;
  }, words)
);

const myFilter = (array,callback)=>{
  let result =[];
  for(let i=0; i<array.length; i++){
     if(callback(array[i])){
         result.push(array[i])
     }
     
  }
  return result;
}
//test the function myFilter
const numbers =[1,2,3,4,5]
console.log(myFilter(numbers,(element)=>{return  element > 2}))
