//EXERCISE 3
//implement function
//array.map//////////////////
const arr1= [1, 2, 3];
const triple=[];

for (let i = 0; i < arr1.length; i++){
    triple.push(arr1[i] *3);
  }
//prints [3, 6, 9]
console.log(triple);

//array.filter////////////////
const arr=[2,4,6,8];
const number=[];
for(let i=0; i<arr.length; i++){
  if(arr[i]>=6){
    number.push(arr[i]);
  }
}
console.log(number)
// prints [ 6, 8 ]

//Array.sort///////////////////////
const num = [5, 3, 8, 1, 4];

function getMinIndex(arr) {
  let minIndex = 0; 
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[minIndex]) {
          minIndex = i; 
      }
  }
  return minIndex; 
}

function sort(arr) {
  const sortedArray = []; 

  while (arr.length > 0) { 
      const minIndex = getMinIndex(arr); 
      sortedArray.push(arr[minIndex]); 
      arr.splice(minIndex, 1); 
  }

  return sortedArray; 
}

// Example usage

const sortedNum = sort(num);
console.log(sortedNum); 
// prints [1, 3, 4, 5, 8]




// Array.concat////////////////
const array1=[1,2,3,];
const array2=[4,5,6];
//two arrays
function addArrays(array1, array2){
  const result=[];
  for (let item of array1){
    result.push(item)
  }
  //loop through first array 
  //adds item/ numbers in each array to the result
  for (let item of array2){
    result.push(item);
  }
  ///loop through second array
  return result;
}
console.log(addArrays(array1, array2));
// prints [ 1, 2, 3, 4, 5, 6 ]

// Array.every/////////////////////
const arr=[1,2,3,4,5,6,7]
function checkEvery(){
  for (let num of arr){
  if (num <=5){
    console.log('false');
    return;
  }
    console.log('true');
  
  }
}
checkEvery();
//prints false

// Array.some/////////////////////
const arr=[1,2,3,4,5,6,7,8];
function checkSome(){
  for(let num of arr){
    //loop through array
    if(num>5){
      return true;
      
    }
  }
  return false;

}
console.log(checkSome());
//prints true

// Array.includes/////////////////////
const array=[1,2,3,4,5,6];
function checkIncludes(array,value){
    return array.some(item => item===value);
  
}
console.log(checkIncludes(array,3));
console.log(checkIncludes(array, 9));
//prints true 
//prints false

// Array.join///////////////////////////
const arr = ['c','a','m','i','l','a'];
function join(array, seperate = ''){
    let result=[];
for (let i = 0; i < array.length; i++){
    result += array[i]; 
    if (i < array.length -1){
        result += seperate; 
      
        }
    }
    return result;
}
console.log(join(arr,''));

//prints camila

// Array.find////////////////////////////
function testFind(array, callback){
    for (let i=0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
          return array[i] 
        }
    }
      return undefined;
    }
  const arr= [1, 69, 8, 7, 6, 5, 4, 3, 2, 1];
  const found = testFind(arr, element => element > 1); 
  console.log(found);
  //prints 69

// Array.findIndex/////////////////////////////
function indexFind(array, callback){
    for(let i = 0; i < array.length; i++){
        if (callback(array[i], i, array)){
            return i;
        }
    }
    return -1; 
  }
  const arr = ["cam", "cami", "camila"]
  const indexFinder= indexFind(arr, element => element === "cami"); // find index of cami
  console.log(indexFinder); 
// prints 1

// Array.indexOf////////////////////////////
const arrNames=['cami','dani','eli','cam']
function ofIndex(array, searchElement){
  for (let i =0; i <array.length; i++){
    if (array[i]===searchElement){
      return i;
    }
  }
  return -1;
}
const indexfind=ofIndex(arrNames, 'cam')
console.log(indexfind);
//prints 3


// Array.fill///////////////////////////////
const arr = new Array(4);

function arrayFill (fillContent) {
  for (i=0;i<arr.length;i++) {
    if (arr[i] !== fillContent) {
      arr[i] = fillContent;
    }
  }
  console.log(arr);
}

arrayFill(1);
//prints [ 1, 1, 1, 1 ]


// Array.reverse///////////////////////////////
let number = ['1', '2', '3', '4', '5','6'];

function reverse() {
    let left = 0;
    let right = number.length - 1;
    while (left < right) {
        [number[left], number[right]] = [number[right], number[left]];
        left++; 
        right--; 
    }
    console.log(number);
}
reverse(); 
//prints [ '5', '4', '3', '2', '1' ]


// Array.shift///////////////////////////////
const arr = [ 'pink', 'blue', 'red', 'orange'];
let shiftArr = [];
let index = 1;
let shiftIndex = arr[0];

function loop(initialValue, testFunction, updateFunction, bodyFunction) {
    while (testFunction(initialValue)) {
        bodyFunction(initialValue);
        initialValue = updateFunction(initialValue);
    }
}
loop(
    index,
    i => i < arr.length,
    i => i + 1,     
    i => { shiftArr = shiftArr.concat(arr[i]); } 
);
console.log(shiftIndex);
//console.log(shiftArr); (this would print array)
//prints pink


// Array.unshift///////////////////////////////
const arr = ['pink', 'blue', 'red', 'orange'];

let unshiftArr = [];
let unshiftItem = ['purple', 'green']; 

function unshift() {
    for (let item of unshiftItem) { 
        unshiftArr.push(item); 
    }
    for (let item of arr) { 
        unshiftArr.push(item); 
    }
    console.log(unshiftArr.length);
    console.log(unshiftArr); 
}

unshift(); 
// prints [ 'purple', 'green', 'pink', 'blue', 'red', 'orange' ]