import './App.css';
import {BookRow} from './BookRow';

function App() {
  const bookArray = [
    {
      cover: './bc-its-all-true.jpeg',
      name: 'It\'s All True',
      artist: 'Bruce Conner',
      year: '2016',
      publisher: 'University of California Press / SFMoMA'
    },
    {
      cover: './moving-pictures-the-complete-film-posters-of-hans-hillmann.jpg',
      name: 'Moving Pictures: The Complete Film Posters of Hans Hillmann',
      artist: 'Hans Hillmann',
      year: '2020',
      publisher: 'Optik Books'
    },
    {
      cover: './bafc-ghosts-of-songs.png',
      name: 'The Ghosts of Songs: The Film Art of the Black Audio Film Collective',
      artist: 'Black Audio Film Collective',
      year: '2007',
      publisher: 'Liverpool University Press'
    },
    {
      cover: './sheila-hicks.jpg',
      name: 'Sheila Hicks: Weaving as Metaphor',
      artist: 'Sheila Hicks',
      year: '2006',
      publisher: 'Yale University Press'
    },
    {
      cover: './sekula-fish-story.jpg',
      name: 'Fish Story',
      artist: 'Allan Sekula',
      year: '1995/2018',
      publisher: 'MACK Books'
    },
    {
      cover: './eric-crosby-ordinary-pictures.jpg',
      name: 'Ordinary Pictures',
      artist: 'Eric Crosby (ed.)',
      year: '2016',
      publisher: 'Walker Art Center'
    },
    {
      cover: './michael-snow-cover-to-cover.jpg',
      name: 'Cover to Cover',
      artist: 'Michael Snow',
      year: '1974/2019',
      publisher: 'Primary Information'
    },
    {
      cover: './william-eggleston-guide.jpg',
      name: 'William Eggleston\'s Guide',
      artist: 'William Eggleston',
      year: '2002',
      publisher: 'The Museum of Modern Art'
    },
  ];

  return (
    <>
      <h1>Morgen&apos;s Favorite Art Books</h1>
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
            <BookRow key={book.name}
              odd={index % 2 === 0}
              cover={book.cover}
              name={book.name}
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
