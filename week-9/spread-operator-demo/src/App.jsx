import { useState } from 'react'
import './App.css'

function App() {
  const myNewObject = {
    foo: 'bar',
    baz: 'blarg'
  }

  // destructuring
  const {foo, baz} = myNewObject;
  console.log('this should be foo', foo);
  console.log('this should be baz', baz);

  // spread operator ... merges objects together - it's a new object
  const myOtherObject = {
    ...myNewObject, // existing object
    someKey: 'this', // new object
    someOtherKey: 'that' // new object
  }
  console.log(myOtherObject);

  // overwrite existing values with a spread operator ...
  const myLastObject = {
    ...myNewObject,
    foo: 'banana'
  }
  console.log(myLastObject)

  // big merge
  const myReallyLastObject = {
    ...myNewObject,
    ...myOtherObject,
    ...myLastObject // last object overwrites existing values from those before
  }
  console.log(myReallyLastObject);

  // array notation to reference objects
  const myFooVar = 'foo';
  console.log(myNewObject[myFooVar]);

  return (
    <>
      Hey!
    </>
  )
}

export default App
