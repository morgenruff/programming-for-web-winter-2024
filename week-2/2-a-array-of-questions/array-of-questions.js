// Create an array objects that represent a question and answer. The object should include a question property ("question" as the key and the actual question as the value) and an answer property ("answer" as the key with the actual answer as the value).
//
// A random question prompt should appear when the page loads. The question prompt should include the value of the question. The user will respond with their guess.
//
// Do not check the answer yet. Just fire an alert combining "You answered " and then the response and then add " The correct answer was " and then display the answer property from the object. Use concatenation to string all these strings together.
//
// Upload your exercise to your MCAD hosting into an appropriate location and share a link to that url in this discussion. Ensure that URL is accessible.

const trivia = [
	{
		question: 'Which real-life couple starred in the 1946 film noir "The Big Sleep" together?',
		answer: 'Humphrey Bogart and Lauren Bacall'
	},
	{
		question: 'Which classical Hollywood movie studio was most known for its glitzy big-budget productions, particularly their innovative musicals?',
		answer: 'Metro-Goldwyn-Mayer'
	},
	{
		question: 'Which hard-boiled actress starred in the films "Double Indemnity," "Meet John Doe," and "The Lady Eve"?',
		answer: 'Barbara Stanwyck'
	},
	{
		question: 'Which powerful-voiced entertainer starred in both stage and film versions of "Show Boat" and popularized the song "Ol Man River"?',
		answer: 'Paul Robeson'
	},
	{
		question: 'Who directed "Rebel Without a Cause" and "Johnny Guitar"?',
		answer: 'Nicholas Ray'
	},
	{
		question: 'Which actor got his first film role in "The Killers" and final role in "Field of Dreams"?',
		answer: 'Burt Lancaster'
	},
];
const index = Math.round(Math.random() * (trivia.length - 1));
const prompt = window.prompt(trivia[index].question);
window.alert('You answered: ' + prompt.toString() + '. The correct answer is: ' + trivia[index].answer + '. Please reload the page to try another question!');
