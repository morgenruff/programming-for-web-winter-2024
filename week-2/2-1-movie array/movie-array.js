const morgensMovies = [
	'Close-Up',
	'Johnny Guitar',
	'Beau Travail',
	'Days of Heaven',
	'Heat'
];
const yourFavoriteMovie = window.prompt('What is your favorite movie?');
morgensMovies.push(yourFavoriteMovie);
console.log('Our combined favorite movies are ' + morgensMovies.toString() + '. Thanks for adding to the list!');
