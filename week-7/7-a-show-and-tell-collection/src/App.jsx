import './App.css';
import {BookRow} from './BookRow';

function App() {
  const bookArray = [
    {
      id: 0,
      cover: './bc-its-all-true.jpeg',
      bookname: 'It\'s All True',
      artist: 'Bruce Conner',
      year: '2016',
      publisher: 'University of California Press / SFMoMA'
    },
    {
      id: 1,
      cover: './moving-pictures-the-complete-film-posters-of-hans-hillmann.jpg',
      bookname: 'Moving Pictures: The Complete Film Posters of Hans Hillmann',
      artist: 'Hans Hillmann',
      year: '2020',
      publisher: 'Optik Books'
    },
    {
      id: 2,
      cover: './sheila-hicks.jpg',
      bookname: 'Sheila Hicks: Weaving as Metaphor',
      artist: 'Sheila Hicks',
      year: '2006',
      publisher: 'Yale University Press'
    },
    {
      id: 3,
      cover: './sekula-fish-story.jpg',
      bookname: 'Fish Story',
      artist: 'Allan Sekula',
      year: '1995/2018',
      publisher: 'MACK Books'
    },
    {
      id: 4,
      cover: './eric-crosby-ordinary-pictures.jpg',
      bookname: 'Ordinary Pictures',
      artist: 'Eric Crosby (ed.)',
      year: '2016',
      publisher: 'Walker Art Center'
    },
    {
      id: 5,
      cover: './michael-snow-cover-to-cover.jpg',
      bookname: 'Cover to Cover',
      artist: 'Michael Snow',
      year: '1974/2019',
      publisher: 'Primary Information'
    },
    {
      id: 6,
      cover: './william-eggleston-guide.jpg',
      bookname: 'William Eggleston\'s Guide',
      artist: 'William Eggleston',
      year: '2002',
      publisher: 'The Museum of Modern Art'
    },
  ];

  return (
    <>
      <h1>Morgen&amp;s Favorite Art Books</h1>
      <p>Here are some of my favorite art books that I return to often.</p>
      <table className='book-table'>
        <thead>
          <tr>
            <th>Cover Image</th>
            <th>Title</th>
            <th>Artist</th>
            <th>Year</th>
            <th>Publisher</th>
          </tr>
        </thead>
        <tbody>
          {bookArray.map((book, index) => {
            return (
            <BookRow
              key={id}
              odd={index % 2 === 0}
              cover={book.cover}
              bookname={book.bookname}
              artist={book.artist}
              year={book.year}
              publisher={book.publisher}
            />
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default App;
