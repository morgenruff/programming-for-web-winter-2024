import { useState } from 'react'
import './App.css'

function App() {
  const llamaFacts = [
    'For centuries, Llamas have been traditionally used by Andean cultures as a pack animal',
    'Llama wool contains only a small amount of lanolin (an oil that aids in water resistance), in contrast with various breeds of sheep',
    'The standard llama (along with alpacas) exist only as domesticated animals, and do not live in the wild',
    'A full-grown llama can reach nearly six feet in height',
    'A llama herd has a fairly rigid and hierarchical social structure that can be easily shuffled when a herd member gets out of line',
    'Llama geldings are routinely used as predator protection for livestock, and bond well with sheep and goats in particular'
  ];
  
  const index = Math.round(Math.random(llamaFacts.length));
  const llamaItem = llamaFacts[index];
  const llamaFactList = llamaFacts.map(llamaItem => <li>{llamaItem}</li>);
  const [secret, setSecret] = useState(true);
  
  return (
    <>
      <div>
        <h1>&#129433; Llamas in React &#129433;</h1>
        <h2>Here are some interesting facts about llamas!</h2>
        <ul>
          {llamaFactList[0]}
          {llamaFactList[1]}
          {llamaFactList[2]}
          {llamaFactList[3]}
          {secret ? (<li>{llamaFacts[4]}</li>) : (<li>{llamaFacts[5]}</li>)}
          <button onClick={() => setSecret((secret) => secret = false)}>See the secret llama fact by clicking this button</button>
        </ul>
      </div>
    </>
  )
}

export default App
