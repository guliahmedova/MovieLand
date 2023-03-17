import { useEffect } from 'react';
import { MoveListing } from '../components/index';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../features/movies/movieSLice';

const Home = () => {
  const dispatch = useDispatch();
  const movieText = 'Harry';
  const showText = 'Friends';

  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch])

  return (
    <div>
      <MoveListing />
    </div>
  )
}

export default Home