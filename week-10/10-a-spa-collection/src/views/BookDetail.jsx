import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './BookDetail.css';
export function BookDetail({data}) {
  const { id } = useParams(); // use id value as parameter to find selection
  console.log('params', id); // log out id when clicking on selection
  const selectedBook = data.find((book) => book.id === id); // find book id match
  console.log('book', selectedBook); // log out object key/value of selection
  return (
    <>
      <div className='page-wrapper'>
        <div className='navlink'>
          {/* link to home view via Route */}
          <Link to='/'>Return to Morgen&apos;s Favorite Art Books Homepage</Link>
        </div>
        {/* display book title */}
        <h1>{selectedBook.name}</h1>
        {/* display book cover image */}
        <img src={selectedBook.cover} alt={selectedBook.name} />
        {/* display book artist, year, and publisher */}
        <p>
          Artist: {selectedBook.artist}
        </p>
        <p>
          Year: {selectedBook.year}
        </p>
        <p>
          Publisher: {selectedBook.publisher}
        </p>
      </div>
    </>
  )
}

BookDetail.propTypes = { // use props from original array
  data: PropTypes.array
}