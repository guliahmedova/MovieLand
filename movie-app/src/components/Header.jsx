import { Link } from 'react-router-dom';
import { useState } from 'react';
import profilePic from '../images/profile.png';
import { BiSearchAlt2 } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../features/movies/movieSLice';
import Loading from './Loading';

const Header = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm('');
  };

  return (
    <div className="header">
      <div className="logo"> <Link to='/'>MovieLand</Link></div>

      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input type="text" value={term} placeholder="Search..." onChange={(e) => setTerm(e.target.value)} />
          <button type='submit'><BiSearchAlt2 /></button>
        </form>
      </div>

      <div className="user-image">
        <img src={profilePic} alt="user" />
      </div>
    </div>
  )
}

export default Header