// select empty div and assign to variable
const myEmptyDiv = document.querySelector('#myEmptyDiv');

// put an h1 inside the div
// create new element
const heading = document.createElement('h1'); // create h1/heading
heading.innerHTML = 'Hello world & llamas most of all, thank you for existing! &#129433; &#129433; &#129433; &#129433; &#129433; &#129433;'; // add h1/heading to HTML document
heading.style.cursor = 'pointer'; // change cursor to pointer when hovering h1
heading.addEventListener('click', handleHeadingClick);
myEmptyDiv.appendChild(heading); // add h1/heading to div
document.body.style.padding = '1em'; // change body padding for readability
function handleHeadingClick () {
	// console.log('Heading has been clicked');
	document.body.style.backgroundColor = '#4010E6'; // change background color on h1 click
	heading.style.color = '#E5DD8B'; // change heading color on h1 click
	heading.style.fontSize = '36pt'; // enlarge font on h1 click
}
