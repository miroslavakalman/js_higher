//162
// let promise = new Promise(function(resolve) {
//     setTimeout(function() {
//       resolve('Прошло 5 секунд');
//     }, 5000);
//   });
  
//   promise.then(function(result) {
//     console.log(result); 
//   });
  
//163
// let promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       let randomNumber = Math.floor(Math.random() * 6);
  
//       if (randomNumber !== 0) {
//         resolve(1 / randomNumber);
//       } else {
//         reject('Ошибка: деление на ноль');
//       }
//     }, 2000);
//   });
  
//   promise.then(
//     function(result) {
//       console.log('Результат деления: ' + result);
//     },
//     function(error) {
//       console.log('Произошла ошибка: ' + error);
//     }
//   );
  
//164
// let promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       let isError = false;
  
//       if (!isError) {
//         resolve('success');
//       } else {
//         reject(new Error('error'));
//       }
//     }, 3000);
//   });
  
//165
// let promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       let isError = false;
  
//       if (!isError) {
//         resolve('success');
//       } else {
//         reject(new Error('error'));
//       }
//     }, 3000);
//   });
  
//   promise
//     .then(res => console.log(res))
//     .catch(err => console.log(err.message));
  
//166
// let successPromise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve('success'), 2000);
//   });
  
//   console.log(successPromise); 
  
//   successPromise.then(
//     result => console.log('Fulfilled:', result),
//     error => console.log('Rejected:', error)
//   );
//   let errorPromise = new Promise(function(resolve, reject) {
//     setTimeout(() => reject(new Error('failure')), 2000);
//   });
  
//   console.log(errorPromise); 
  
//   errorPromise.then(
//     result => console.log('Fulfilled:', result),
//     error => console.log('Rejected:', error)
//   );
  
//170
//1
// function getRandomDelay() {
//     return new Promise(resolve => {
//       const delay = Math.floor(Math.random() * 10 + 1) * 1000;
//       setTimeout(() => resolve(delay), delay);
//     });
//   }
  
//   const promisesArray = Array.from({ length: 10 }, () => getRandomDelay());
  
  //2
//   Promise.race(promisesArray)
//     .then(result => console.log(result))
//     .catch(error => console.log(error));
  
  //3
//   Promise.all(promisesArray)
//     .then(results => {
//       const sum = results.reduce((acc, delay) => acc + delay, 0);
//       console.log(sum);
//     })
//     .catch(error => console.log(error));
  
//172
//1
// function loadImage(path) {
//     return new Promise(function(resolve, reject) {
//       let image = document.createElement('img');
//       image.src = path;
  
//       image.addEventListener('load', function() {
//         resolve(image);
//       });
//       image.addEventListener('error', function() {
//         reject(new Error('Image "' + path + '" load error'));
//       });
//     });
//   }
  
  //2
//   let paths = ['img1.png', 'img2.png', 'img3.png'];
  
//   Promise.all(paths.map(loadImage))
//     .then(images => {
//       images.forEach(image => document.body.appendChild(image));
//     })
//     .catch(error => console.log(error));
  
  //3
//   function domContentLoaded() {
//     return new Promise(function(resolve) {
//       window.addEventListener('DOMContentLoaded', function() {
//         resolve('DOM loaded');
//       });
//     });
//   }
  
//   domContentLoaded().then(message => console.log(message));
  