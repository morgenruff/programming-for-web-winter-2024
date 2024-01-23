const favoriteMovies = [
	'Close-Up',
	'Johnny Guitar',
	'Beau Travail',
	'Days of Heaven',
	'Heat'
];

console.log(favoriteMovies);

const yourFavoriteMovie = prompt('What is your favorite movie?');

console.log(yourFavoriteMovie);

const combinedFavorites = [
	favoriteMovies.join(', '),
	yourFavoriteMovie
];

console.log('Our combined favorite movies are ' + combinedFavorites.toString() + '!');
