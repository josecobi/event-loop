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
// let nestedArray = [1, [2, [3, 4], 5], [6, 7], 8, [9, [10, 11]]];

// function trampoline(fn) {
//     return function (...args) {
//         let result = fn(...args);
//         while (typeof result === 'function') {
//             result = result();
//         }
//         return result;
//     };
// }

// function flattenArray(arr) {
//     function flatten(arr, result = []) {
//         arr.forEach((element) => {
//             if (Array.isArray(element)) {
//                 return flatten(element, result);
//             } else {
//                 result.push(element);
//             }
//         });
//         return result;
//     }

//     return trampoline(flatten)(arr);
// }

// let result = flattenArray(nestedArray);
// console.log(result);

//>>>>>>>>>>>>>>>>>>>>part 3: Trampolines<<<<<<<<<<<<<<<