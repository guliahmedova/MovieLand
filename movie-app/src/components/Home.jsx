import { useEffect } from 'react';
import { MoveListing } from '../components/index';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../features/movies/movieSLice';
 
const Home = () => {
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch])

  return (
    <div>
      <MoveListing />
    </div>
  )
}

export default Home