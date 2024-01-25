// Description:
// 
// You are going to combine your knowledge of arrays with your knowledge of objects to create a (drum-roll please) array of objects! 🎉
// 
// Steps:
// 
// Create an array with your favorite games as objects inside of the array. Each game object will represent one game.
// 
// Each object will have the same properties. I recommend title, type, numberOfPlayers, rating, shortDescription. Please note, the naming convention of object properties is camelCase.
// 
// You must have 3 or more games in the collection
// 
// Prompt the user with a message like 'I have 3 games in my collection. Pick a number between 1 and 3 and I'll tell you about that game'
// 
// Cast the prompt to a number (if possible)
// 
// Using the plus sign as a concatenation operator, alert the user to you game. 'You selected' + myGameArray[promptResponse -1 ].title + ' which is a ' + myGameArray[promptResponse - 1].type + ' of game...' And so forth.
// 
// Add your exercise files to your git repo and commit your changes. Push to github. Upload to your MCAD hosting and share a link to that url in this discussion. Ensure that URL is accessible and functional.

const morgensGames = [
	{
		title: 'Life',
		numberOfPlayers: 'two to six',
		rating: 5,
		shortDescription: 'a turn-based board game in which players roll dice and move through the parts of artificially-normalized human life, including childhood, adolescence, adulthood, and old age as conceived of by the dominant demographic group in the mid-20th-Century United States of America.'
	},
	{
		title: 'Battleship',
		numberOfPlayers: 'two',
		rating: 5,
		shortDescription: 'a turn-based strategy board game in which players sit in front of a hidden grid representing a slice of an unnamed ocean. Players control a fleet of differently-sized naval ships which sit on player-chosen grid coordinates. The objective is to sink all of your opponenet ships by guessing their coordinates before they sink all of yours. Just like life under capitalism.'
	},
	{
		title: 'Hungry Hungry Hippos',
		numberOfPlayers: 'two to four',
		rating: 5,
		shortDescription: 'a fast-and-furious game in which each player controls a single hippo via a switch operated mouth. This mouth is used to eat marbles spat out of the lake-like base. Who gets the most marbles wins. A game for those who love the sound of clacking plastic and the feeling of pinched fingers.'
	},
];

const userGame = window.prompt('I have 3 games in my collection. Enter a number between 1 and 3 to learn more about one of my games!');

if (userGame === 1 || 2 || 3) {
	console.log('Thanks for participating! You selected ' + morgensGames[userGame - 1].title + '. This is a ' + morgensGames[userGame - 1].numberOfPlayers + ' player game which I rate a ' + morgensGames[userGame - 1].rating + '. The game is ' + morgensGames[userGame - 1].shortDescription);
	window.alert('Thanks for participating! You selected ' + morgensGames[userGame - 1].title + '. This is a ' + morgensGames[userGame - 1].numberOfPlayers + ' player game which I rate a ' + morgensGames[userGame - 1].rating + '. It is ' + morgensGames[userGame - 1].shortDescription);
} else {
	console.log('I think you broke it.');
	window.alert('I think you broke it.');
};
