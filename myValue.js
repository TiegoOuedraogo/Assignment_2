var arr = ["a", "b", "c", "d", "e"];
const myValue = (letter , callback) => {
  let newLetters = [];

  for (let i = 0; i < letter.length; i++) {
    newLetters.push(callback(letter[i]));
  }

  return newLetters;
};

console.log(
  myValue(arr, (element) => {
    return element;
  })
);
