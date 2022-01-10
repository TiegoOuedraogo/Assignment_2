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

