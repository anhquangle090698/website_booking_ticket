import Introduction from 'components/Introduction';
import Popup from 'components/Popup';
import Detail from 'features/Movies/components/Detail';
import { getDetailMovieAsync } from 'features/Movies/moviesSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function DetailMovie(props) {
  const { maPhim } = useParams();
  const dispatch = useDispatch();
  const detailMovie = useSelector((state) => state.movies.detailMovie);
  const showtimeDetail = useSelector((state) => state.movies.showtimeDetailMovie);

  useEffect(() => {
    const getDetailMovies = async () => {
      dispatch(await getDetailMovieAsync(maPhim));
    };

    getDetailMovies();
  }, []);

  return (
    <div className="detail-movie">
      <Detail detailMovie={detailMovie} showtimeDetail={showtimeDetail}></Detail>
      <Introduction textWhite="textWhite"></Introduction>
      <Popup></Popup>
    </div>
  );
}

DetailMovie.propTypes = {};

export default DetailMovie;
