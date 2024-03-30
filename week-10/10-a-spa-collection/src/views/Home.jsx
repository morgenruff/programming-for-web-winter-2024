import { useState } from 'react';
import { nanoid } from 'nanoid';
import Masthead from '../Masthead/Masthead.jsx';
import ItemCard from '../ItemCard/ItemCard.jsx';
import { NewBookForm } from '../newBookForm/newBookForm.jsx';
import bookData from '../assets/book-data.json';
import './Home.css';
export function Home() {
  const [books, setBooks] = useState(bookData);
  function deleteBook(id) {
    console.log('delete me', id) // log which id is being deleted
    const updatedArray = books.filter((artBook) => {
      return artBook.id !== id // make new array without the just-deleted book
    })
    setBooks(updatedArray) // set array state to match currently displayed books
  }
  function duplicateBook(id) {
    console.log('duplicate me', id) // log duplicated book
    const matchingBook = books.find((artBook) => {
      return artBook.id === id // find matching book card from the array
    })
    const updatedBook = {...matchingBook, id: nanoid()} // update duplicate book with new id
    setBooks([...books, updatedBook]) // change state to reflect duplicated book
  }
  function addBook(newBook) {
    const bookWithId = {
      ...newBook,
      id: nanoid() // issue random id
    }
    setBooks([...books, bookWithId]) // update state to reflected new added book
  }
  return (
    <div className='page'>
      {/* render masthead */}
      <Masthead/>
      {/* render dynamic collection of books */}
      <div className='collection'>
        {/* books map goes here */}
        {/* use itemCard component in loop */}
        {books.map((artBook) => {
          return (
            <ItemCard
              key={artBook.id}
              deleteFn={deleteBook}
              duplicateFn={duplicateBook}
              {...artBook}
            />
          )
        })}
      </div>
      <hr/>
      {/* render new book input form */}
      <NewBookForm addBookFn={addBook}/>
    </div>
  );
}