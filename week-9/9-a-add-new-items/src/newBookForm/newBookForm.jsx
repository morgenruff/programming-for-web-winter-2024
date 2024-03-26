import './newBookForm.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
export function NewBookForm({addBookFn}) {
  const initialBookSetting = {
    cover: '',
    name: '',
    artist: '',
    year: '',
    publisher: '',
    extra: false,
  };
  const [newBook, setNewBook] = useState(initialBookSetting);
  const [errorObj, setErrorObj] = useState({
    name: '',
    cover: '',
    artist: ''
  });
  function validateForm(newBook) {
    console.log('triggering validation', !!newBook.name);
    let valid = true;
    if(!newBook.name) {
      // set error object name prop to error message
      setErrorObj((prevErrorObj) => {
        return {
          ...prevErrorObj,
          name: 'the title field is required'
        }
      });
      valid = false;
    }
    if(!newBook.cover) {
      // set cover prop to error message
      setErrorObj((prevErrorObj) => {
        return {
          ...prevErrorObj,
          image: 'the cover image field is required'
        }
      });
      valid = false;
    }
    if(!newBook.artist) {
      // set artist prop to error message
      setErrorObj((prevErrorObj) => {
        return {
          ...prevErrorObj,
          artist: 'the artist name field is required'
        }
      });
      valid = false;
    }
    console.log({valid});
    return valid;
  }
  function changeHandler(event) {
    console.log(event.target.value);
    const needsBoolean = 'extra';
    const updatedTarget = needsBoolean.includes(event.target.id) ? !!(event.target.value) : event.target.value;
    setNewBook((prevBook) => {
      return {
        ...prevBook,
      [event.target.name]: updatedTarget
      }
    })
  }
  function submitHandler(event) {
    event.preventDefault();
    console.log({newBook});
    if(validateForm(newBook)) {
      // send book to app
      addBookFn(newBook);
      // reset values
      setNewBook(initialBookSetting)
    }
  }
  return (
      <form className='new-book-form-wrapper' onSubmit={submitHandler}>
        <fieldset>
          <legend>Factual Book Details</legend>
          <div className={{'form-group': true, 'error': errorObj.cover}}>
            <label className='required' htmlFor='cover'>Cover Image URL</label>
            <input
              type='text'
              name='cover'
              id='cover'
              value={newBook.cover}
              onChange={changeHandler}
              onBlur={() => {
                if(newBook.cover) {
                  setErrorObj((prevErrorObj => {
                    return {
                      ...prevErrorObj,
                      cover: ''
                    }
                  }))
              }}}
            />
            {errorObj.cover && (
              <>
                <br />
                <small className='errorFeedback'>{errorObj.cover}</small>
              </>
            )}
          </div>
          <div className={{'form-group': true, 'error': errorObj.name}}>
            <label className='required' htmlFor='name'>Book Title</label>
            <input
              type='text'
              name='name'
              id='name'
              value={newBook.name}
              onChange={changeHandler}
              onBlur={() => {
                if(newBook.name) {
                  setErrorObj((prevErrorObj => {
                    return {
                      ...prevErrorObj,
                      name: ''
                    }
                  }))
                }}}
            />
            {errorObj.name && (
              <>
                <br />
                <small className='errorFeedback'>{errorObj.name}</small>
              </>
            )}
          </div>
          <div className={{'form-group': true, 'error': errorObj.artist}}>
            <label className='required' htmlFor='artist'>Artist Name</label>
            <input
              type='text'
              name='artist'
              id='artist'
              value={newBook.artist}
              onChange={changeHandler}
              onBlur={() => {
                if(newBook.artist) {
                  setErrorObj((prevErrorObj => {
                    return {
                      ...prevErrorObj,
                      artist: ''
                    }
                  }))
                }}}
            />
            {errorObj.artist && (
              <>
                <br />
                <small className='errorFeedback'>{errorObj.artist}</small>
              </>
            )}
          </div>
          <div className='form-group'>
            <label htmlFor='year'>Year</label>
            <input
              type='text'
              name='year'
              id='year'
              value={newBook.year}
              onChange={changeHandler}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='publisher'>Publisher</label>
            <input
              type='text'
              name='publisher'
              id='publisher'
              value={newBook.publisher}
              onChange={changeHandler}
            />
          </div>
        </fieldset>
        <fieldset>
          <legend>Subjectivities</legend>
          <div className='form-group'>
            <label htmlFor='extra'>Super Favorite?</label>
            <input
              type='checkbox'
              name='extra'
              id='extra'
              onChange={changeHandler}
              value={newBook.extra}
            />
          </div>
        </fieldset>
        <button type='submit' disabled={errorObj.cover || errorObj.name || errorObj.artist}>
          Add Book
        </button>
      </form>
  )
}

NewBookForm.propTypes = {
  addBookFn: PropTypes.func.isRequired
}