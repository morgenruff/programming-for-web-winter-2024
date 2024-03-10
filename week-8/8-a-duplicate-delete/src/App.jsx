import { useState } from 'react';
import Masthead from './Masthead/Masthead';
import ItemCard from './ItemCard/ItemCard';
import './App.css';
import { nanoid } from 'nanoid';

function App() {
  const [books, setBooks] = useState([
  {
    cover: './bc-its-all-true.jpeg',
    name: 'It\'s All True',
    artist: 'Bruce Conner',
    year: '2016',
    publisher: 'University of California Press / SFMoMA',
    extra: true,
    id: '1'
  },
  {
    cover: './moving-pictures-the-complete-film-posters-of-hans-hillmann.jpg',
    name: 'Moving Pictures: The Complete Film Posters of Hans Hillmann',
    artist: 'Hans Hillmann',
    year: '2020',
    publisher: 'Optik Books',
    extra: false,
    id: '2'
  },
  {
    cover: './bafc-ghosts-of-songs.png',
    name: 'The Ghosts of Songs: The Film Art of the Black Audio Film Collective',
    artist: 'Black Audio Film Collective',
    year: '2007',
    publisher: 'Liverpool University Press',
    extra: false,
    id: '3'
  },
  {
    cover: './sheila-hicks.jpg',
    name: 'Sheila Hicks: Weaving as Metaphor',
    artist: 'Sheila Hicks',
    year: '2006',
    publisher: 'Yale University Press',
    extra: true,
    id: '4'
  },
  {
    cover: './sekula-fish-story.jpg',
    name: 'Fish Story',
    artist: 'Allan Sekula',
    year: '1995/2018',
    publisher: 'MACK Books',
    extra: true,
    id: '5'
  },
  {
    cover: './eric-crosby-ordinary-pictures.jpg',
    name: 'Ordinary Pictures',
    artist: 'Eric Crosby (ed.)',
    year: '2016',
    publisher: 'Walker Art Center',
    extra: false,
    id: '6'
  },
  {
    cover: './michael-snow-cover-to-cover.jpg',
    name: 'Cover to Cover',
    artist: 'Michael Snow',
    year: '1974/2019',
    publisher: 'Primary Information',
    extra: true,
    id: '7'
  },
  {
    cover: './william-eggleston-guide.jpg',
    name: 'William Eggleston\'s Guide',
    artist: 'William Eggleston',
    year: '2002',
    publisher: 'The Museum of Modern Art',
    extra: true,
    id: '8'
  },
])

  function deleteCard(id) {
    console.log('delete me', id)
    const updatedArray = books.filter((artBook) => {
      return artBook.id !== id
    })
    setBooks(updatedArray)
  }

  function duplicateCard(id) {
    console.log('duplicate me', id)
    const matchingBook = books.find((artBook) => {
      return artBook.id === id
    })
    const updatedBook = {...matchingBook, id: nanoid()}
    setBooks([...books, updatedBook])
  }

  return (
    <div className='page'>
      <Masthead />
      <div className='collection'>
        {/* books map goes here */}
        {/* use itemCard component in loop */}
        {books.map((artBook) => {
          return (
            <ItemCard
              key={artBook.id}
              deleteFn={deleteCard}
              duplicateFn={duplicateCard}
              {...artBook}
            />
          )
        })};
      </div>
    </div>
  )
}

export default App
