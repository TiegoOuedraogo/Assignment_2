/** The filter() method creates a new array with all elements that pass the test implemented by the provided function. */
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
/** */

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

/**The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present. */

const myFindIndex =(array,item)=>{
  for(let i=0; i<array.length; i++){
      if(array[i]==item){
          return i;
      }
  }
  return -1;
}
//test the function myFindIndex
const numbers =[1,2,3,4,5]
console.log(myFindIndex(numbers,'p'))


/*: Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements. */

const arr= [0,1,0,3,12,8,0,9,0,0];

 const moveZeros = function(arr){
   let nonZeros = 0;
   for(let i =0;  i<arr.length;i++){
     if(arr[i]!==0){
       arr[nonZeros]= arr[i];
       nonZeros++;
     }
   }
   
for(let i = nonZeros; i<arr.length;i++){
  arr[i]=0;
}
  return arr;


 }

 console.log(moveZeros(arr))

 /**The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. */

 const array1 = [1, 30, 39, 29, 10, 13, 0];
const my_Every = (callback, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i])) {
      return false;
    }
  }
  return true;
};
console.log(
  my_Every((element) => {
    return element < 40;
  }, array1)
);

/**The forEach() method executes a provided function once for each array element. */
const myForEach =(array,callback)=>{
  for(let i=0; i<array.length; i++){
      callback(array[i])
  }
}
//test the function myForEach
const veggies =['olives', 'tomato', 'feta cheese', 'green-pepper']
console.log(myForEach(veggies,(element)=>{console.log(element)}))

/*The keys() method returns a new Array Iterator object that contains the keys for each index in the array.*/
const arr = ["a", , "c"];
const myKeys = (array) => {
  let keys = [];
  for (let i = 0; i < array.length; i++) {
      
    keys.push(i);
  }
  return keys;
};
console.log(myKeys(arr))

/**The map() method creates a new array populated with the results of calling a provided function on every element in the calling array. */
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

/** The reduce() method executes a user-supplied “reducer” callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
*/

const array = [15, 16, 17, 18, 19];

const reducer= (previous, current, index, array)=> {
  const returns = previous + current;
  console.log(`previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`);
  return returns;
}

array.reduce(reducer);

/** The values() method returns a new array iterator object that contains the values for each index in the array.*/
var arr = ["a", "b", "c", "d", "e"];
const myValues = (array) => {
  let values = [];

  for (let i = 0; i < array.length; i++) {
    values.push(array[i]);
  }

  return values;
};

console.log(
  myValues(arr)
);
/** The push() method adds one or more elements to the end of an array and returns the new length of the array.*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const myPush = (arr,items)=>{
  
  arr[arr.length]=items
return arr.length;
}
//fruits.push;
console.log("the new length is: ",myPush(fruits,"peaches"))
console.log(fruits)

/** The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.*/

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
