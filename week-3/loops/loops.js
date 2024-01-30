// MDN examples

// function countSelected(selectObject) {
// 	let numberSelected = 0;
// 	for (let i = 0; i < selectObject.options.length; i++) {
// 		if (selectObject.options[i].selected) {
// 			numberSelected++;
// 		}
// 	} return numberSelected;
// }

// let i = 0;
// do {
// 	i += 1;
// 	console.log(i);
// } while (i < 5);
// 
// let n = 0;
// let x = 0;
// while (n < 3) {
// 	n++;
// 	x += n;
// 	console.log(n);
// }

// let i = 0;
// let n = 0;
// while (i < 5) {
//   i++;
//   if (i === 3) {
// 	continue;
//   }
//   n += i;
//   console.log(n);
// }

// for loop

for (let i = 0; i <= 10; i++) {
	console.log('this is i', i);
}

// for loop with array

const myMovies = ['star wars', 'empire strikes back', 'return of the jedi', 'raiders of the lost ark', 'last crusade'];

for (let j = 0; j < myMovies.length; j++) {
	console.log('i like ', myMovies[j]);
}

// while loop - be careful with this

let myVar = false;
while (myVar === false) {
	console.log('this will happen once.');
	myVar = true;
}

// while loop removing items in an array

const myNums = [1, 2, 3, 4, 5, 6];
while (myNums.length > 0) {
	console.log('removing ', myNums[myNums.length - 1]);
	myNums.pop();
}
console.log(myNums);

// 
