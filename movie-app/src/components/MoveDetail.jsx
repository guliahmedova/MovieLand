import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillStar } from 'react-icons/ai';
import { Loading } from './index'
import { BsFillHandThumbsUpFill, BsFilm, BsFillCalendarEventFill } from 'react-icons/bs';
import { fetchAsyncMovieOrShowsDetail, getSelectedMovieOrShow, removeSelectedMovieOrShow } from '../features/movies/movieSLice';

const MoveDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);
  console.log(data)

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowsDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    }
  }, [dispatch, imdbID])

  return (
    <div className='movie-section'>
      {Object.keys(data).length === 0 ?
        (<Loading />) :
        (<>
          <div className="section-left">
            <div className="movie-title">{data.Title}</div>
            <div className="movie-rating">
              <span>IMDB Rating <AiFillStar className='icon star' /> : {data.imdbRating} </span>
              <span>IMDB Votes <BsFillHandThumbsUpFill className='icon like' /> : {data.imdbVotes} </span>
              <span>Runtime <BsFilm className='icon film' /> : {data.Runtime} </span>
              <span>Year <BsFillCalendarEventFill className='icon calendar' /> : {data.Year} </span>
            </div>
            <div className="movie-plot">
              {data.Plot}
            </div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
              <div>
                <span>Box Office</span>
                <span>{data.BoxOffice}</span>
              </div>
              <div>
                <span>Country</span>
                <span>{data.Country}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <div className="gradient"></div>
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>)
      }
    </div>
  )
}

export default MoveDetail