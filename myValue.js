var arr = ["a", "b", "c", "d", "e"];
const myValue = (array) => {
  let values = [];

  for (let i = 0; i < array.length; i++) {
    values.push(array[i]);
  }

  return values;
};

console.log(
  myValue(arr)
);
