import PropTypes from 'prop-types';
import './ItemCard.css';
// import clsx from 'clsx';
import star from '../assets/star-svgrepo-com.svg';
import trash from '../assets/trash-svgrepo-com.svg'
import copy from '../assets/sync-svgrepo-com.svg'
export default function ItemCard({cover, name, artist, year, publisher, extra, id, deleteFn, duplicateFn}) {
  return (
    <div className="bookCard">
      {extra && <div className="extra"><img src={star} title="this is a super extra favorite" alt="star"/></div>}
      <div className="cardImg">
        <img src={cover} alt={name}/>
      </div>
      <h2 className="cardTitle">{name}</h2>
      <div className='details'>
        <div className="artist">{artist}</div>
        <div className="publisher">{publisher}</div>
        <div className="year">{year}</div>
      </div>
      <div className="actions">
        <a href="#" onClick={(evt) => {
          evt.preventDefault();
          deleteFn(id)
        }}>
          <img src={trash} alt="trash"/>
        </a>
        <a href="#" onClick={(evt) => {
          evt.preventDefault()
          duplicateFn(id)
        }}>
          <img src={copy} alt="copy"/>
        </a>
      </div>
    </div>
  )
}

ItemCard.propTypes = {
  cover: PropTypes.string,
  name: PropTypes.string,
  artist: PropTypes.string,
  year: PropTypes.string,
  publisher: PropTypes.string,
  extra: PropTypes.bool,
  id: PropTypes.string,
  duplicateFn: PropTypes.func,
  deleteFn: PropTypes.func
}