const myArr = ['bob', 'betty', 'sue'];
const myOtherArray = new Array();
myOtherArray.push('star wars'); // add new item to end of array
myOtherArray.push('raiders of the lost ark');
// myArr.pop(); // removes last item
// myArr.shift(); // removes first item
myArr.unshift('james'); // add item to the beginning of the array

console.log(myArr);
console.log(myOtherArray);
console.log(myOtherArray[0]);
console.log(myArr[1]);
console.log(myArr.indexOf('betty'));
const bettyIdx = myArr.indexOf('betty');
if (bettyIdx > -1) {
	console.log(myArr[bettyIdx]);
}

myArr.splice(bettyIdx, 0, 'robert'); // adds 'robert' before 'betty'
console.log(myArr);
// myArr.splice('betty'); // removes 'betty' from the array
// console.log(myArr);

console.log(myArr.length);

// Math.random() between 0 and 1
// Math.round() rounds to nearest whole number incl. 0
// myArr.length - 1 to get last index number of an array (1 less than .length due to the 0 starting point)

const randomNumber = Math.round(Math.random() * (myArr.length - 1)); // return whole number at random within the bounds of the length of myArr

console.log(randomNumber);

console.log(myArr[randomNumber]); // return random array value calculated from above
