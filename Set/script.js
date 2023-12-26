//37
// let set = new Set;

// set.add(1);
// set.add(2);
// set.add(3);

//38
//1
// let set = new Set([1, 2, 3, 1, 3, 4]);
// console.log(set); 

//2
// let set = new Set([1, 2, 3]);
// set.add(2);
// console.log(set); 

//39
//1
// let set = new Set([1, 2, 3]);
// console.log(set.size);

//2
// let set = new Set([1, 2, 3]);
// console.log(set.has(3));
// console.log(set.has(4));

//40
// let numberSet = new Set([5, 10, 15, 20]);
// let sum = 0;

// for (let num of numberSet) {
//   sum += num;
// }

// console.log(sum);

//41
//1
// let set = new Set([1, 2, 3]);
// let arr = [...set];
// let arr = Array.from(set);

//2
// let arr = [1, 2, 3];
// let set = new Set(arr);


//42
// let arr = [1, 2, 3, 1, 3, 4];
// let res = [...new Set(arr)];

// console.log(res)

//43
// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('p');
// let set = new Set;

// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		set.add(this);
// 	});
// }
// button.addEventListener('click', function() {
// 	for (let elem of set) {
// 		elem.textContent = elem.textContent + '!';
// 	}
// });