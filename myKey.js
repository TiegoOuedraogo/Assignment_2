const arr = ["a", , "c"];
const myKey = (array) => {
  let keys = [];
  for (let i = 0; i < array.length; i++) {
      
    keys.push(i);
  }
  return keys;
};
console.log(myKey(arr))
