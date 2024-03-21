import { useState } from 'react'; // import useState
import './AlpacaForm.css'; // import CSS

export function AlpacaForm () {
  const initialFormData = {
    firstName: '',
    lastName: '',
    street: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
    colors: [],
  } // object array of input form data
  const [formObject, setFormObject] = useState(initialFormData); // core useState values
  const states = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming']; // list of states
  function changeHandler(event) {
    console.log(event.target.value);
    if(event.target.name === 'colors') {
      const colorName = event.target.id; // calls id on color checkbox option
      if(formObject.colors.includes(colorName)) { // check for chosen colorName
        setFormObject({
          ...formObject, // call initial formObject.colors with spread operator
          colors: formObject.colors.filter((color) => { // filter out un-chosen colors
            color !== colorName
          })
        })
      } else {
        setFormObject({
          ...formObject,
          colors: [...formObject.colors, colorName] // set color to user-chosen color
        })
      }
    } else {
      setFormObject((previousForm => {
        return {
          ...previousForm, // call previous form value
          [event.target.name]: event.target.value, // overwrite existing value by calling key from initial data array
        }
      }))
    }
  } // handle user-created changes to the form

  function handleSubmit(event) {
    event.preventDefault(); // prevent page refresh on change
    console.log('the whole form object', formObject); // log out the entire submission on user submit
  } // handle user form submission

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Personal Information</legend>
          <div className="formGroup">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              onChange={changeHandler} // when input changes (type), use changeHandler function
              value={formObject.firstName} // comes from state variable
            />
          </div>
          <div className="formGroup">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              onChange={changeHandler}
              value={formObject.lastName}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="street">Street Address</label>
            <input
              type="text"
              name="street"
              id="street"
              onChange={changeHandler}
              value={formObject.street}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              id="city"
              onChange={changeHandler}
              value={formObject.city}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="city">Zip Code</label>
            <input
              type="text"
              name="zipCode"
              id="zipCode"
              onChange={changeHandler}
              value={formObject.zipCode}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="state">State</label>
            <select name="state" id="state" value={formObject.state} onChange={changeHandler}>
              {states.map((singleState, index) => {
                return (
                  <option key={index} value={singleState}>{singleState}</option>
                )
              })}
            </select>
          </div>
          <div className="formGroup">
            <label htmlFor="country">Country</label>
            <select name="country" id="country" value={formObject.country} onChange={changeHandler}>
              <option value="US">US</option>
              <option value="Canada">Canada</option>
            </select>
          </div>
        </fieldset>
        <fieldset>
          <legend>Tell us all about your alpaca interests!</legend>
          <p>Favorite Alpaca Colors</p>
          <div className="formGroup">
            <label htmlFor="brown">
              Brown
              <input
                type="checkbox"
                name="colors"
                id="brown"
                checked={formObject.colors.includes('brown')}
                onChange={changeHandler}
              />
            </label>
            <label htmlFor="black">
              Black
              <input
                type="checkbox"
                name="colors"
                id="black"
                checked={formObject.colors.includes('black')}
                onChange={changeHandler}
              />
            </label>
            <label htmlFor="beige">
              Beige
              <input
                type="checkbox"
                name="colors"
                id="beige"
                checked={formObject.colors.includes('beige')}
                onChange={changeHandler}
              />
            </label>
            <label htmlFor="pinto">
              Pinto
              <input
                type="checkbox"
                name="colors"
                id="pinto"
                checked={formObject.colors.includes('pinto')}
                onChange={changeHandler}
              />
            </label>
          </div>
        </fieldset>
        <button type='submit'>&#129433; SIGN ME UP! &#129433;</button>
      </form>
    </>
  )
}