import { useState } from 'react'
import './App.css'

function App() {
  const [formObject, setFormObject] = useState({
    firstName: '',
    lastName: '',
    password: '',
    soda: ['pepsi'],
    pets: true,
    colors: [],
    selectResponse: 'stompy'
  })
  function handleChange(event) {
    const simpleValueSetFormItems = ['firstName', 'lastName', 'password', 'playerType']
    if(simpleValueSetFormItems.includes(event.target.name)) {
      setFormObject((prevForm) => {
        return {
          ...prevForm,
          [event.target.name]: event.target.value
        }
      })
    }
    if(event.target.name === 'soda') {
      setFormObject({
        ...formObject,
        soda: event.target.value
      })
    }
    if(event.target.name === 'colors') {
      if(formObject.colors.includes(event.target.id)) {
        setFormObject({
          ...formObject,
          colors: formObject.colors.filter((color) => {
            return color !== event.target.id;
          })
        })
      } else {
        setFormObject({
          ...formObject,
          colors: [...formObject.colors, event.target.id]
        })
      }
    }

  }
  function handleSubmit(evt) {
    evt.preventDefault();
    console.log('whole form', formObject);
  }

  return (
    <>
      <h1>Forms in React</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Personal Information</legend>
          <div>
            <label htmlFor='firstName'>
              First Name
            </label>
            <input
              id='firstName'
              type='text'
              name='firstName'
              value={formObject.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='lastName'>
              Last Name
            </label>
            <input
              id='lastName'
              type='text'
              name='lastName'
              value={formObject.lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='password'>
              Password
            </label>
            <input
              id='password'
              type='password'
              name='password'
              value={formObject.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='pets'>
              Likes Pets
            </label>
            <input
              id='pets'
              type='checkbox'
              name='pets'
              checked={formObject.pets}
              value={formObject.pets}
              onChange={handleChange}
            />
          </div>
        </fieldset>
        <fieldset>
          <legend>Radio Group</legend>
          <div>
            <label htmlFor='pepsi'>Pepsi
              <input
                type='radio'
                name='soda'
                id='pepsi'
                value='pepsi'
                onChange={handleChange}
                checked={formObject.soda === 'pepsi'}
              />
            </label>
          </div>
          <div>
            <label htmlFor='coke'>Coke
              <input
                type='radio'
                name='soda'
                id='coke'
                value='coke'
                onChange={handleChange}
                checked={formObject.soda === 'coke'}
              />
            </label>
          </div>
          <div>
            <label htmlFor='mtnDew'>Mountain Dew
              <input
                type='radio'
                name='soda'
                id='mtnDew'
                value='mtnDew'
                onChange={handleChange}
                checked={formObject.soda === 'mtnDew'}
              />
            </label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Checkboxes</legend>
          <label htmlFor='red'>
            Red
            <input
              type='checkbox'
              name='colors'
              id='red'
              value={formObject.colors.includes('red')}
              onChange={handleChange}
            />
          </label>
          <label htmlFor='blue'>
            Blue
            <input
              type='checkbox'
              name='colors'
              id='blue'
              value={formObject.colors.includes('blue')}
              onChange={handleChange}
            />
          </label>
          <label htmlFor='green'>
            Green
            <input
              type='checkbox'
              name='colors'
              id='green'
              value={formObject.colors.includes('green')}
              onChange={handleChange}
            />
          </label>
          <label htmlFor='cyan'>
            Cyan
            <input
              type='checkbox'
              name='colors'
              id='cyan'
              value={formObject.colors.includes('cyan')}
              onChange={handleChange}
            />
          </label>
        </fieldset>
        <fieldset>
          <select
            name='playerType'
            id='playerType'
            onChange={handleChange}
            value={formObject.selectResponse}
          >
            {/* {selectOptions.map((option, index) => { */}
            {/*   return( */}
            {/*     <option */}
            {/*       key={index} */}
            {/*       value={option.toLowerCase()} */}
            {/*       selected={selectResponse === option.toLowerCase()}> */}
            {/*       {option} */}
            {/*     </option> */}
            {/* ) */}
            {/* })} */}
            <option value='aggro'>Aggro</option>
            <option value='control'>Control</option>
            <option value='stompy'>Stompy</option>
            <option value='mid-range'>Mid-Range</option>
          </select>
        </fieldset>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App
