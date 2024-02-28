import './camelid.css'

function Camelid({name, fact, image}) {
	console.log(name, fact)
	return (
		<div className='camelidCard'>
			<h2>{name}</h2>
			<p>{fact}</p>
			<div>{image}</div>
		</div>
	)
}

export default Camelid;
