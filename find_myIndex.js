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