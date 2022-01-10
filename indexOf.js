var salad = ['olives', 'tomato', 'feta cheese', 'green-pepper'];
const updateVegetablesCollection = (salad, tomatoes)=> {
  if (salad.indexOf(tomatoes) !== 1) {
      salad.push(tomatoes);
      console.log('New salad collection is : ' + salad);
  } else if (salad.indexOf(tomatoes) > -1) {
      console.log(tomatoes + ' already exists in the salad collection.');
  }
}


updateVegetablesCollection(salad, 'spinach');
// New salad collection is : olives,tomato,feta cheese,green-pepper,spinach
updateVegetablesCollection(salad, 'spinach');
// spinach already exists in the salad collection.