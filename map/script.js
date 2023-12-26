//1
// let map = new Map;

// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = [5, 6];

// map.set(arr1, 'data1');
// map.set(arr2, 'data2');
// map.set(arr3, 'data3');

// let map = new Map;

//2
// let obj1 = { key: 'value1' };
// let obj2 = { key: 'value2' };
// let obj3 = { key: 'value3' };

// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = [5, 6];

// map.set(obj1, arr1);
// map.set(obj2, arr2);
// map.set(obj3, arr3);

//3
// let map = new Map([
//     ['key1', 'value1'],
//     ['key2', 'value2'],
//     ['key3', 'value3']
//   ]);
  
//   let keysArray = Array.from(map.keys());
  
//   for (let key of keysArray) {
//     console.log(key);
//   }

//4
// let map = new Map([
//     ['key1', 'value1'],
//     ['key2', 'value2'],
//     ['key3', 'value3']
//   ]);
  
//   let entriesArray = Array.from(map.entries());
  
//   for (let [key, value] of entriesArray) {
//     console.log(key, value);
//   }

//5
// let inputs = document.querySelectorAll('input');
// let inputMap = new Map();

// inputs.forEach((input, index) => {
//   inputMap.set(input, index + 1);

//   input.addEventListener('click', function() {
//     this.value = inputMap.get(this);
//   });
// });

//6
// let inputNumbers = new Map();

// document.querySelectorAll('input').forEach(input => {
//   input.addEventListener('keydown', function(event) {
//     if (event.key === 'Enter') {
//       let inputValue = parseInt(this.value);
//       if (!isNaN(inputValue)) {
//         if (inputNumbers.has(this)) {
//           inputNumbers.get(this).push(inputValue);
//         } else {
//           inputNumbers.set(this, [inputValue]);
//         }
//       }
//     }
//   });

//   input.addEventListener('blur', function() {
//     if (inputNumbers.has(this)) {
//       console.log(inputNumbers.get(this));
//     }
//   });
// });

  