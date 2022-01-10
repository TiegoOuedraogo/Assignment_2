const arr = ["a", , "c"];
const myKey = (array, callback) => {
  let newKey = [];
  for (let i = 0; i < array.lenght; i++) {
      console.log(array)
    newKey.push(callback(i));
  }
  return newKey;
};

console.log(
  myKey(arr, (element) => {
    return element;
  })
);
