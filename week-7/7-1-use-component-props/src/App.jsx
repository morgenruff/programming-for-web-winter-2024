import Camelid from './components/Camelid.jsx'
import './App.css'
import llamaImg from './assets/llamas.jpg'
import alpacaImg from './assets/alpacas.jpeg'

function App() {
  const camelids = [
    {name: 'llamas', fact: 'llama ancestors are thought to have originated in the Great Plains region of the US around 40 million years ago'},
    {name: 'alpacas', fact: 'alpacas use a communal dung pile :)'}
  ]
  
  return (
    <>
      <div style={{
        margin: '0 auto',
        padding: '20px', 
        backgroundColor: 'lightgray',
        color: 'darkgreen',
        border: '2px solid antiquewhite',
        borderRadius: '5px'
      }}>
        <h1>All About Camelids</h1>
        <p>both are great</p>
        <div>
          <Camelid 
            name={camelids[0].name}
            fact={camelids[0].fact}
          />
          <img src={llamaImg} alt={camelids[0].name}/>
        </div>
        <div>
          <Camelid 
            name={camelids[1].name}
            fact={camelids[1].fact}
          />
          <img src={alpacaImg} alt={camelids[1].name}/>
        </div>
      </div>
    </>
  )
}

export default App;
