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

favoriteMovies.push(yourFavoriteMovie);

console.log('Our combined favorite movies are ' + favoriteMovies.toString() + '. Thanks for adding to my list!');
