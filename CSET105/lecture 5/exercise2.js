//EXERCISE 2
//my own loop
function loop(initialValue, testFunction, updateFunction, bodyFunction) {
    while (testFunction(initialValue)) {  
        bodyFunction(initialValue);      
        initialValue = updateFunction(initialValue); 
    }
  }
  //ex
  const array=[1,2,3,4];
  function showLoop(arr) { 
    loop(
        0,  
        (index) => index < arr.length, 
      
        (index) => index + 1, 
      
        (index) => { 
            console.log(arr[index]);
        }
    );
  }
  showLoop(array);