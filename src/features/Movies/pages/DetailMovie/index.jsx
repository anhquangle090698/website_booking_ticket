import Footer from 'components/Footer';
import Header from 'components/Header';
import Introduction from 'components/Introduction';
import Loading from 'components/Loading';
import Popup from 'components/Popup';
import ScrollToTop from 'components/ScrollToTop';
import Detail from 'features/Movies/components/Detail';
import { getDetailMovieAsync } from 'features/Movies/moviesSlice';
import { useShowLoading } from 'hooks/customHook';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

DetailMovie.propTypes = {
  maPhim: PropTypes.string,
  detailMovie: PropTypes.object,
  showtimeDetail: PropTypes.array,
  loading: PropTypes.bool,
  getDetailMovies: PropTypes.func
};

function DetailMovie(props) {
  //Get id movie from path url.
  const { maPhim } = useParams();
  //Custom hook show loading
  const loading = useShowLoading(1500);

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
    <>
      {loading && <Loading></Loading>}

      {!loading && (
        <>
          <Header></Header>
          <div className="detail-movie">
            <Detail detailMovie={detailMovie} showtimeDetail={showtimeDetail}></Detail>
            <Introduction textWhite="textWhite"></Introduction>
          </div>
          <Popup></Popup>
          <ScrollToTop></ScrollToTop>
          <Footer></Footer>
        </>
      )}
    </>
  );
}

export default DetailMovie;
