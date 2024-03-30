import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './views/Home.jsx';
import { BookDetail } from './views/BookDetail.jsx';
import bookData from './assets/book-data.json';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path=':id' element={<BookDetail data={bookData} />} />
    </Routes>
  )
}
export default App