export default function UsStateComponent({stateName, deleteFn, focusFn}) {
  return (
    <div>
      <strong>{stateName}</strong>
      <div>
        <button onClick={() => {
          focusFn(stateName)
        }}>focus</button> ||| <button onClick={() => {
          deleteFn(stateName)
      }}>delete</button>
      </div>
    </div>
  )
}