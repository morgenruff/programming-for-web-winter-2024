import { useState } from 'react'
import './App.css'
import llamaImg from './assets/llamas.jpeg'
import alpacaImg from './assets/alpacas.jpeg'

function App() {
  const [camelidImg, setCamelidImg] = useState(llamaImg);

  return (
    <>
      <h1>llamas &amp; alpacas, oh my!</h1>
      <p>click a button to select your camelid</p>
      <div>
        <img src={camelidImg} alt='camelid of choice'/>
        <div>
          <button onClick={() => {
            setCamelidImg(llamaImg)
          }}>
            llama
          </button>
          <button onClick={() => {
            setCamelidImg(alpacaImg)
          }}>
            alpaca
          </button>
        </div>
      </div>
    </>
  )
}

export default App
