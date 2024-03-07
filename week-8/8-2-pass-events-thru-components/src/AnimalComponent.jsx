export default function AnimalComponent ({animalName, deleteFn, focusFn}) {
  return (
    <div>
      {animalName}
      <div>
        <button onClick={() => {
          focusFn(animalName)
        }}>focus the {animalName}</button> ||| <button onClick={() => {
          deleteFn(animalName)
      }}>delete the {animalName}</button>
      </div>
    </div>
  )
}