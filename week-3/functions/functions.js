function logOutGreeting(greeting) {
	console.log(greeting);
};
logOutGreeting('Salutations');

function getStuff(ingredient) {
	console.log('get ' + ingredient);
};
getStuff('bread');
getStuff('peanut butter');
getStuff('honey');

const makeSandwich = function(ingredientArray) {
	for(let i = 0; i < ingredientArray.length; i++) {
		console.log('get', ingredientArray[i]);
	};
};
makeSandwich(['bread', 'mayo', 'tuna fish']);

function makeRand (maxNumber) {
	const output = Math.ceil(Math.random() * maxNumber);
	return output;
};
const randomOutput = makeRand(100);
console.log(randomOutput);

function checkLegality (age) {
	return age >= 21;
};

const morgensAge = 43;
if (checkLegality(morgensAge)) {
	console.log('they are legal');
};

const myObject = {
	x: 200,
	y: 400,
	getPosition: () => {
		this.x = 35;
		this.y = 45;
		console.log('we are ' + this.x + ' from the left and ' + this.y + ' from the top.')
	}
}

myObject.getPosition ();
console.log(myObject.x, myObject.y);

// sync discussion demos - January 30, 2024

function sayHelloPerson(name) {
	alert('Howdy ' + name + '!');
}
sayHelloPerson('Morgen');

const firstNumber = window.prompt('number'); // create 1st prompt
const secondNumber = window.prompt('different number'); // create 2nd prompt
console.log(Number(firstNumber) + Number(secondNumber));

function calculator(number1, number2) {
	let modifiedNumber1 = number1;
	let modifiedNumber2 = number2;
	if(typeof number1 === 'string') {
		let modifiedNumber1 = number1;
		modifiedNumber1 = Number(number1)
	}
	if(typeof number2 === 'string') {
		let modifiedNumber2 = number2;
		modifiedNumber2 = Number(number2)
	}
	console.log(modifiedNumber1 + modifiedNumber2);
}

calculator(); // get numbers from prompt

function nothingReally () {
	console.log('Nothing to see here');
}
const whatIsTheFunction = nothingReally();

console.log('this is the variable what is the function, ', whatIsTheFunction)
