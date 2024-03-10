import './Masthead.css';
import mastheadImg from '../assets/masthead.jpg';

export default function Masthead() {
  return (
    <div className='masthead'>
      <img src={mastheadImg} alt='Morgen&apos;s Favorite Art Books' />
      <h1>Morgen&apos;s Favorite Art Books</h1>
    </div>
  )
}