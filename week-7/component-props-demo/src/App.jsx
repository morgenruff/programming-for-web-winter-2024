import Color from './components/Color'

function App() {
  const colorData = [
    {name: 'puce', hex: '#cc8899', desc: 'a color with a hilarious name'},
    {name: 'green', hex: '#00b200', desc: 'the color of plants and the Hulk'},
    {name: 'purple', hex: '#600060', desc: 'a color linked to royalty and madness'}
  ]
  
  return (
    <div>
      <h2>Colors</h2>
      <Color 
      name={colorData[0].name}
      desc={colorData[0].desc}
      hex={colorData[0].hex}/>
      <Color 
      name={colorData[1].name}
      desc={colorData[1].desc}
      hex={colorData[1].hex}/>
      <Color 
      name={colorData[2].name}
      desc={colorData[2].desc}
      hex={colorData[2].hex}/>
    </div>
  )
}

export default App;
