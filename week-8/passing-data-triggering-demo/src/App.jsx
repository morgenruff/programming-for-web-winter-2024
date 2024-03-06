import { useState } from 'react'
import './App.css'
import UsStateComponent from './UsStateComponent.jsx';

function App() {
  const [headline, setHeadline] = useState('List of US states');
  const [usStates, setUsStates] = useState(['Oregon', 'Washington', 'California', 'Nevada', 'Idaho', 'Wyoming', 'Montana', 'Utah']);

  function deleteState(stateName) {
    const updatedArray = usStates.filter((state) => {
      return state !== stateName;
    });
    setUsStates(updatedArray);
  }

  function focusState(stateName) {
    setHeadline(stateName)
  }

  return (
    <>
      <div>
        <h1>{`${headline} is the focus`}</h1>
        {usStates.map((myState) => {
          return <UsStateComponent
            key={myState}
            stateName={myState}
            deleteFn={deleteState}
            focusFn={focusState}
          />
        })}
      </div>
    </>
  )
}

export default App
