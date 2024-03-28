import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

export function Song ({data}) {
  const {slug} = useParams();
  const selectedSong = data.find((song) => song.slug === slug);
  console.log(selectedSong);
  return (
    <>
      <Link to={'/'}>Home</Link>
      <h1>{selectedSong.title}</h1>
      <img src={selectedSong.cover} alt={selectedSong.title}/>
      <p>Artist: {selectedSong.artist}</p>
      <p>Rank: {selectedSong.rank}</p>
    </>
  )
}

Song.proptypes = {
  data: PropTypes.arrayOf(PropTypes.any)
}