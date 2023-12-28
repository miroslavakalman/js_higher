//139
//1
// try {
//     let str = 'некая строка';
//     localStorage.setItem('key', str);
//   } catch (error) {
//     if (error instanceof DOMException && error.name === 'QuotaExceededError') {
//       console.log('Хранилище переполнено');
//     } else {
//       console.error('Произошла ошибка:', error.message);
//     }
//   }

  //2
//   let jsonString = '{"data": [1, 2, 3]}';
  
//   try {
//     let data = JSON.parse(jsonString);
//     let ul = document.createElement('ul');
  
//     data.data.forEach(item => {
//       let li = document.createElement('li');
//       li.textContent = item;
//       ul.appendChild(li);
//     });
  
//     document.body.appendChild(ul);
//   } catch (error) {
//     console.error('Произошла ошибка при разборе JSON:', error.message);
//   }
  
//140
//1
// try {
//     let str = 'некая строка';
//     localStorage.setItem('key', str);
//     alert('успешно сохранено!');
//   } catch (error) {
//     if (error instanceof DOMException && error.name === 'QuotaExceededError') {
//       console.log('Хранилище переполнено');
//     } else {
//       console.error('Произошла ошибка:', error.message);
//     }
//   }
  
  //2
//   try {
//     let json = '[1,2,3,4,5]';
//     let arr = JSON.parse(json);
  
//     let sum = 0;
//     for (let elem of arr) {
//       sum += +elem;
//     }
  
//     alert(sum);
//   } catch (error) {
//     console.error('Произошла ошибка при разборе JSON:', error.message);
//   }

//141
// try {
//     let arr = getArr('[1,2,3,4,5]');
//     console.log(arr);
//   } catch (error) {
//     console.error('Произошла ошибка при разборе JSON:', error.message);
//   }
//   function getArr(json) {
//     return JSON.parse(json);
//   }
  
//142
// 1
// try {
//     JSON.parse('{1,2,3,4,5}');
//   } catch (error) {
//     console.log(error.name); // SyntaxError
//     console.log(error.message); // Unexpected token ',' in JSON at position 1
//   }
  
//2
//   try {
//     localStorage.setItem('key', 'some very long string'.repeat(1000000));
//   } catch (error) {
//     console.log(error.name); // QuotaExceededError
//     console.log(error.message); // Failed to execute 'setItem' on 'Storage': Setting the value of 'key' exceeded the quota.
//   }
  
//144
// 1
// function saveData(json) {
// 	try {
// 		let arr = JSON.parse(json);
		
// 		for (let i = 0; i < arr.length; i++) {
// 			localStorage.setItem(i, arr[i]);
// 		}
// 	} catch (error) {
// 		if (error.name === 'QuotaExceededError') {
// 			alert('закончилось место в хранилище');
// 		}
		
// 		if (error.name === 'SyntaxError') {
// 			alert('некорректный JSON');
// 		}
// 	}
// }

// 2
// try {
// 	saveData('{1,2,3,4,5}');
// } catch (error) {
// 	if (error.name === 'QuotaExceededError') {
// 		alert('закончилось место в хранилище');
// 	}
	
// 	if (error.name === 'SyntaxError') {
// 		alert('некорректный JSON');
// 	}
// }

// try {
// 	saveData('["item1", "item2", "item3"]');
// 	localStorage.setItem('key', 'some very long string'.repeat(1000000));
// } catch (error) {
// 	if (error.name === 'QuotaExceededError') {
// 		alert('закончилось место в хранилище');
// 	}
	
// 	if (error.name === 'SyntaxError') {
// 		alert('некорректный JSON');
// 	}
// }

//145
// function sqrtWithException(x) {
//     if (x < 0) {
//         throw new Error('Невозможно извлечь корень из отрицательного числа');
//     }
//     return Math.sqrt(x);
// }

// try {
//     let result = sqrtWithException(-1);
//     console.log(result);
// } catch (error) {
//     console.log(error.message);
// }

//146
//1
// try {
//     throw new TypeError('Текст ошибки типа TypeError');
// } catch (error) {
//     console.log(error.name); 
//     console.log(error.message); 
// }
//2
// try {
//     throw new SyntaxError('Текст ошибки типа SyntaxError');
// } catch (error) {
//     console.log(error.name); 
//     console.log(error.message); 
// } catch (rangeError) {
//     console.log(rangeError.name); 
//     console.log(rangeError.message); 
// }

//147
//1
// function div(a, b) {
//     if (b !== 0) {
//         return a / b;
//     } else {
//         throw { name: 'DivisionByZeroError', message: 'ошибка деления на ноль' };
//     }
// }

//2
// function sqrt(number) {
//     if (number >= 0) {
//         return Math.sqrt(number);
//     } else {
//         throw { name: 'NegativeSquareRootError', message: 'ошибка извлечения корня из отрицательного числа' };
//     }
// }

//148
// function getCost(elem) {
// 	if (elem.dataset.price !== undefined && elem.dataset.amount !== undefined) {
// 		return elem.dataset.price * elem.dataset.amount;
// 	} else {
// 		if (elem.dataset.price === undefined && elem.dataset.amount === undefined) {
// 			throw {
// 				name: 'ProductCostError',
// 				message: 'отсутствует цена и количество у продукта'
// 			};
// 		} else if (elem.dataset.price === undefined) {
// 			throw {
// 				name: 'ProductCostError',
// 				message: 'отсутствует цена у продукта'
// 			};
// 		} else {
// 			throw {
// 				name: 'ProductCostError',
// 				message: 'отсутствует количество у продукта'
// 			};
// 		}
// 	}
// }

// let product = document.querySelector('#product');

// try {
// 	let cost = getCost(product);
// 	alert(cost);
// } catch (error) {
// 	if (error.name === 'ProductCostError') {
// 		alert(error.message);
// 	} 
// }

//149
// try {
// 	let json = `[
// 		{
// 			"name": "user1",
// 			"age": 25,
// 			"salary": 1000
// 		},
// 		{
// 			"name": "user2",
// 			"age": 26,
// 			"salary": 2000
// 		},
// 		{
// 			"name": "user3",
// 			"age": 27,
// 			"salary": 3000
// 		}
// 	]`;

// 	let parsedData = JSON.parse(json);

// 	if (!Array.isArray(parsedData)) {
// 		throw {
// 			name: 'InvalidDataError',
// 			message: 'Данные не являются массивом'
// 		};
// 	}

//     } catch (error) {
//         if (error.name === 'SyntaxError') {
//             alert('Некорректный JSON');
//         } else if (error.name === 'InvalidDataError') {
//             alert('Данные не являются массивом');
//         }
//     }

//150
// try {
// 	let arr = JSON.parse(json);

// 	for (let i = 0; i < arr.length; i++) {
// 		localStorage.setItem(i, arr[i]);
// 	}
// } catch (error) {
// 	if (error.name === 'QuotaExceededError') {
// 		alert('Закончилось место в хранилище');
// 	} else if (error.name === 'SyntaxError') {
// 		alert('Некорректный JSON');
// 	} else {
// 		throw error; 
// 	}
// }
