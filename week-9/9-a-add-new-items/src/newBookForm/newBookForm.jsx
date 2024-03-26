import './newBookForm.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
export function NewBookForm({addBookFn}) {
  const initialBookSetting = { // initial settings - empty form fields and false boolean for favorite
    cover: '',
    name: '',
    artist: '',
    year: '',
    publisher: '',
    extra: false,
  };
  const [newBook, setNewBook] = useState(initialBookSetting); // new book initial state
  const [errorObj, setErrorObj] = useState({ // required fields error objects
    name: '',
    cover: '',
    artist: ''
  });
  function validateForm(newBook) {
    console.log('triggering validation', !!newBook.name);
    let valid = true; // initial validation state
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
      valid = false; // valid false if any required field is empty
    }
    console.log({valid});
    return valid; // if all required fields filled, form is valid
  }
  function changeHandler(event) {
    console.log(event.target.value); // log
    const needsBoolean = 'extra'; // for object key extra, boolean value
    const updatedTarget = needsBoolean.includes(event.target.id) ? !!(event.target.value) : event.target.value; // check if id is extra, if not, return value
    setNewBook((prevBook) => {
      return {
        ...prevBook,
      [event.target.name]: updatedTarget // new book value after checking for extra id
      }
    })
  }
  function submitHandler(event) {
    event.preventDefault(); // prevent page reload on submit
    console.log({newBook}); // log new book object to the console
    if(validateForm(newBook)) {
      // send book to app
      addBookFn(newBook); // add the new book to the list
      // reset values
      setNewBook(initialBookSetting) // reset the form fields to original state
    }
  }
  return (
    <form className="new-book-form-wrapper" onSubmit={submitHandler}>
      <h2>Add a Book to the Collection!</h2>
      {/* fieldset 1 - main fields, including required fields - all strings */}
      <fieldset>
        <legend>Factual Book Details</legend>
        <div className={{
          'form-group': true,
          'error': errorObj.cover
        }}>
          <label className="required" htmlFor="cover">Cover Image URL</label>
          <input
            type="text"
            name="cover"
            id="cover"
            value={newBook.cover}
            onChange={changeHandler}
            onBlur={() => {
              if (newBook.cover) {
                setErrorObj((prevErrorObj => {
                  return {
                    ...prevErrorObj,
                    cover: ''
                  }
                }))
              }
            }}
          />
          {errorObj.cover && (
            <>
              <br/>
              <small className="errorFeedback">{errorObj.cover}</small>
            </>
          )}
        </div>
        <div className={{
          'form-group': true,
          'error': errorObj.name
        }}>
          <label className="required" htmlFor="name">Book Title</label>
          <input
            type="text"
            name="name"
            id="name"
            value={newBook.name}
            onChange={changeHandler}
            onBlur={() => {
              if (newBook.name) {
                setErrorObj((prevErrorObj => {
                  return {
                    ...prevErrorObj,
                    name: ''
                  }
                }))
              }
            }}
          />
          {errorObj.name && (
            <>
              <br/>
              <small className="errorFeedback">{errorObj.name}</small>
            </>
          )}
        </div>
        <div className={{
          'form-group': true,
          'error': errorObj.artist
        }}>
          <label className="required" htmlFor="artist">Artist Name</label>
          <input
            type="text"
            name="artist"
            id="artist"
            value={newBook.artist}
            onChange={changeHandler}
            onBlur={() => {
              if (newBook.artist) {
                setErrorObj((prevErrorObj => {
                  return {
                    ...prevErrorObj,
                    artist: ''
                  }
                }))
              }
            }}
          />
          {errorObj.artist && (
            <>
              <br/>
              <small className="errorFeedback">{errorObj.artist}</small>
            </>
          )}
        </div>
        <div className='form-group'>
          <label htmlFor="year">Year</label>
          <input
            type="text"
            name="year"
            id="year"
            value={newBook.year}
            onChange={changeHandler}
          />
        </div>
        <div className='form-group'>
          <label htmlFor="publisher">Publisher</label>
          <input
            type="text"
            name="publisher"
            id="publisher"
            value={newBook.publisher}
            onChange={changeHandler}
          />
        </div>
      </fieldset>
      {/* fieldset 2 - subjective item - boolean */}
      <fieldset>
        <legend>Subjectivities</legend>
        <div className="form-group">
          <label htmlFor="extra">Super Favorite?</label>
          <input
            type="checkbox"
            name="extra"
            id="extra"
            onChange={changeHandler}
            value={newBook.extra}
          />
        </div>
      </fieldset>
      {/* submit button that's disabled if any required field isn't filled */}
      <button type="submit" disabled={errorObj.cover || errorObj.name || errorObj.artist}>
        Add Book
      </button>
    </form>
  )
}

NewBookForm.propTypes = {
  addBookFn: PropTypes.func.isRequired // add book function as prop for the larger form function
}