//>>>>>>>>>>>>>>>>>>>>>>>>Part 1: Stack overflow<<<<<<<<<<<<<<<<<<<
// let globalCounter = 0;

// function increment() {
//   globalCounter++;
//   increment();
// }

// try {
//     increment();
// } catch (error) {
//   console.error(`Error: ${error.message}`);
//   console.log(`Global counter: ${globalCounter}`);
// }


//>>>>>>>>>>>>>>>>>>>>part 2: Trampolines<<<<<<<<<<<<<<<
let nestedArray = [1, [2, [3, 4], 5], [6, 7], 8, [9, [10, 11]]];
function flattenArray(arr){
  
  arr.forEach((element) => {
    if(Array.isArray(element)){
      flattenArray(element);
      
    }
    else {
      newArr.push(element);      
    }
  });
  
}

let newArr = [];
flattenArray(nestedArray);
console.log(newArr);

