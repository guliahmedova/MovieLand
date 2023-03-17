import { useSelector } from "react-redux"
import { getAllMovies, getAllShows } from "../features/movies/movieSLice"
import MovieCard from "./MovieCard";

const MoveListing = () => {

  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  let renderMovies = movies.Response === 'True' ? (
    movies.Search.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ))
  ) : (
    <div className="movies-error">
      <h3>Empty</h3>
    </div>
  )

  let renderShows = shows.Response === 'True' ? (
    shows.Search.map((show, index) => (
      <MovieCard key={index} data={show} />
    ))
  ) : (
    <div className="movies-error">
      <h3>Empty</h3>
    </div>
  )

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          {renderMovies}
        </div>
      </div>

      <div className="shows-list">
        <h2>Shows</h2>
        <div className="movie-container">
          {renderShows}
        </div>
      </div>
    </div>
  )
}

export default MoveListing