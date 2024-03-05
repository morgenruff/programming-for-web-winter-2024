import { useState } from 'react'
import './App.css'

function App() {
  const [scoreObj, setScoreObj] = useState({left: 0, right: 0})

  return (
    <>
      <h1>Solitaire clicky game</h1>
      <div>
        left
        <button onClick={() => {
          setScoreObj({ ...scoreObj , left: scoreObj.left + 1});
        }}>push me</button>
      </div>
      <div>
        right
        <button onClick={() => {
          setScoreObj({ ...scoreObj , right: scoreObj.right + 1});
        }}>no, push me</button>
      </div>
      <div>
        <h2>scores</h2>
        left score {scoreObj.left} | right score {scoreObj.right}
      </div>
    </>
  )
}

export default App
