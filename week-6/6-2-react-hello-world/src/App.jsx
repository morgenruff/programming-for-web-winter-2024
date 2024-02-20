import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const hi = 'Hello World'
  const boo = 'What\'s wrong?'
  const [happy, setHappy] = useState(true) // state of happiness - toggle
  const isItOn = true
  
  return (
    <>
      <div className='main-area'>
        <h1>Hello world, this is Morgen's first React app... &#128064;</h1>
        <button onClick={() => setHappy((happy) => happy = false)}>
          click me if you aren't happy
        </button>
        {happy ? (<div className='yes'>{hi}</div>) : (<div className='no'>{boo}</div>)}
        {isItOn && (<div className='yes'>is this thing on? {isItOn.toString()}</div>)}
      </div>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>click the button to make the count go up! (not sure why I left this here)</p>
      </div>
    </>
  )
}

export default App
