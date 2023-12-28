//156
// function make(callback) {
// 	setTimeout(function() {
// 		let res = [1, 2, 3, 4, 5];
// 		callback(res); 
// 	}, 3000);
// }
// make(function(res) {
//     let sum = res.reduce((acc, curr) => acc + curr, 0);
//     console.log(sum); 
//   });
  
//157
// function make(num1, num2, callback) {
//     setTimeout(function () {
//       let arr = [1, 2, 3, 4, 5];
//       let result = arr[num1] + arr[num2];
//       callback(result); 
//     }, 3000);
//   }
  
//   make(1, 3, function (res) {
//     console.log(res);
//   });
  
//158
// function loadImage(src, callback) {
//     let image = new Image();
//     image.src = src;
  
//     image.addEventListener('load', function () {
//       callback(image, null); 
//     });
  
//     image.addEventListener('error', function () {
//       callback(null, 'Ошибка загрузки картинки'); 
//     });
//   }
//   loadImage('img/img.png', function (image, err) {
//     if (!err) {
//       document.body.appendChild(image);
//     } else {
//       console.log('Произошла ошибка: ' + err);
//     }
//   });
  