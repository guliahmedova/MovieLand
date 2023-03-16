import { useSelector } from "react-redux"
import { getAllMovies } from "../features/movies/movieSLice"
import MovieCard from "./MovieCard";

const MoveListing = () => {

  const movies = useSelector(getAllMovies);
  let renderMovies = movies.Response === 'True' ? (
    movies.Search.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ))
  ) : (
    <div className="movies-error">
      <h3>Empty</h3>
    </div>
  )

  console.log(movies  )

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          {renderMovies}
        </div>
      </div>
    </div>
  )
}

export default MoveListing