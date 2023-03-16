import { useEffect } from 'react';
import { MoveListing } from '../components/index';
import movieApi from '../common/apis/movieApi';
import { APIkey } from '../common/apis/movieApiKey';
import { useDispatch } from 'react-redux';
import { addMovies } from '../features/movies/movieSLice';

const Home = () => {
  const movieText = 'Harry';
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi.get(`?apikey=${APIkey}&s=${movieText}&type=movie`)
        .catch((error) => console.log('error:', error));
      dispatch(addMovies(response.data));
    }
    fetchMovies();
  }, [])

  return (
    <div>
      <MoveListing />
    </div>
  )
}

export default Home