import './BookRow.css';

export function BookRow({cover, name, artist, year, publisher, odd}) {
  return (
    <tr className={odd && 'odd'}>
      <td><img src={cover} alt={name}/></td>
      <td>{name}</td>
      <td>{artist}</td>
      <td>{year}</td>
      <td>{publisher}</td>
    </tr>
  )
}
