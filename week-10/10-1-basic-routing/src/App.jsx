import './App.css'
import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './views/Home.jsx'
import { Llamas } from './views/Llama.jsx';
import { Alpaca} from './views/Alpaca.jsx';

function App() {

  return (
    <>
    {/* navigation here */}
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/llamas'>Llamas</Link></li>
        <li><Link to='/alpaca'>Alpacas</Link></li>
      </ul>
    {/* routes here - 1 route for each page */}
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/llamas' element={<Llamas />} />
        <Route path='/alpaca' element={<Alpaca />} />
      </Routes>
    </>
  )
}

export default App
