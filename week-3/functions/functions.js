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