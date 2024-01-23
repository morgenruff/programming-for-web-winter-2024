// create object
const morgensCar = {
	color: 'black',
	pistons: 4,
};

console.log(morgensCar);

// add property
morgensCar.fuelInjection = true;

console.log(morgensCar);

morgensCar['4-wheel-drive'] = true;

console.log(morgensCar);

// display single item with dot notation
console.log('Morgens car is ', morgensCar.color);

// display single item with array notation
console.log('is it 4 wheel drive?', morgensCar['4-wheel-drive']);

// using toString (works with arrays)
console.log(morgensCar.toString());

const myCars = ['rav', 'pilot', 'juke'];

console.log(myCars.toString());

// remove property
delete morgensCar.pistons;

console.log('morgens car without pistons', morgensCar);

// merge two objects - second object values override first object values
const basicJuke = { // template
	wheels: 4,
	color: 'red',
	doors: 4,
	make: 'Nissan'
};

const newJuke = Object.assign({}, basicJuke, morgensCar);

console.log('new juke', newJuke);

// objects in arrays - useful for database-type datasets - spreadsheets, dbs - also really useful for looping
const cars = [
	{make: 'Nissan', model: 'Rogue', color: 'orange'},
	{make: 'Nissan', model: 'Altima', color: 'blue'},
	{make: 'Dodge', model: 'Viper', color: 'yellow'},
	{make: 'VW', model: 'Beetle', color: 'pink'},
	{make: 'Chevy', model: 'Blazer', color: 'black'},
	{make: 'Dodge', model: 'Charger', color: 'green'}
];

console.log('index 1 of cars color', cars[1].color);

const randomIdx = Math.round(Math.random() * cars.length - 1);

console.log('My car is a ' + cars[randomIdx].make + ' ' + cars[randomIdx].model + ' and it is the color ' + cars[randomIdx].color);
