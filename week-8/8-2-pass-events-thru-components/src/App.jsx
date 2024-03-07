// Either using a new sandbox in codesandbox.io or by creating a new React app with "create vite@latest"
// create an application that renders a list of animal components (using an array of animal of different
// animal names or animal objects as a state variable). Each animal component should display the name of
// the animal and two buttons. One button should be a focus button, and the other should be a delete button.
// Optionally, if you choose to use an array of animal objects, you could also display an image of the animal.
//
// Above the list of animals, use a state variable to provide a headline to your application
// (like "Ken's list of animals").
//
// Create a function on the top level (App.jsx most likely) to update the headline state variable to what ever text is
// provided through the argument. Create a second function that takes in the name of an animal and sets the animal
// array state variable to the same array but with the provided animal name (or object that has that name) omitted.
//
// Pass both of these functions as props into to the animal component.
//
// In the animal component, using an onClick handler, call the appropriate passed in function. When the focus
// button is clicked, we should be able to use one of the passed in functions to change the headline to
// our animal array. When the delete button is clicked, we should be able to use one of the passed in
// functions to update our animal array state variable to omit the animal that was passed to the function.

import { useState } from 'react'
import './App.css'
import AnimalComponent from './AnimalComponent.jsx';
function App() {
  const [headline, setHeadline] = useState('lil slimy guys')
  const [animals, setAnimals] = useState(
    ['frog', 'slug', 'snail', 'salamander', 'worm', 'toad', 'newt', 'caecilian']
  )
function deleteAnimal(animalName) {
    const updatedArray = animals.filter((animal) => {
      return animal !== animalName;
    });
    setAnimals(updatedArray);
}
function focusAnimal(animalName) {
    setHeadline(animalName)
}

  return (
    <>
      <div>
        <h1>{`${ headline }`}</h1>
        {animals.map((myAnimal) => {
          return <AnimalComponent
            key={myAnimal}
            animalName={myAnimal}
            deleteFn={deleteAnimal}
            focusFn={focusAnimal}
          />
        })}
      </div>
    </>
  )
}

export default App
