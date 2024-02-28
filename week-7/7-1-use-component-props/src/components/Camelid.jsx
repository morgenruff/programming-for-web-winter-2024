import './camelid.css'

function Camelid({name, fact}) {
	console.log(name, fact)
	return (
		<div className='camelidCard'>
			<h2>{name}</h2>
			<p>{fact}</p>
		</div>
	)
}

export default Camelid;
