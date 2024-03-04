import './BookRow.css';

function BookRow(cover, title, artist, year, publisher, odd) {
  const rowClass
  return (
    <tr className={odd && 'odd'}>
      <td><img src={cover} alt={title}/></td>
      <td>{title}</td>
      <td>{artist}</td>
      <td>{year}</td>
      <td>{publisher}</td>
    </tr>
  )
}

export default BookRow;
