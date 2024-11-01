// //EXERCISE 1
//reduce method with concat method
const arr= [[1,2],[3,4],[5]];
const flatten= arr.reduce(function(accumulator, currentValue){
  return accumulator.concat(currentValue);
});
console.log(flatten);

// //output  equal [1,2,3,4,5]