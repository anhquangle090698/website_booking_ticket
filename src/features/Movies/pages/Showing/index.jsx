import Footer from 'components/Footer';
import Header from 'components/Header';
import Introduction from 'components/Introduction';
import Loading from 'components/Loading';
import Popup from 'components/Popup';
import ScrollToTop from 'components/ScrollToTop';
import Movie from 'features/Movies/components/Movie';
import { getListMoviesAsync } from 'features/Movies/moviesSlice';
import { useShowLoading } from 'hooks/customHook';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

Showing.propTypes = {
  loading: PropTypes.bool,
  movies: PropTypes.array.isRequired,
  fetchDataFilm: PropTypes.func,
  renderListFilm: PropTypes.func,
};

function Showing(props) {
  //Custom hook show loading
  const loading = useShowLoading(1500);

  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movies.listMovies);

  //Api get list film
  useEffect(() => {
    const getListMovies = async () => {
      dispatch(await getListMoviesAsync());
    };

    getListMovies();
  }, []);

  //Render all movie
  const renderListFilm = () => {
    return movies?.map((film, index) => {
      return (
        <div className="showing__item" key={index}>
          <Movie movie={film}></Movie>
        </div>
      );
    });
  };

  return (
    <>
      {loading && <Loading></Loading>}

      {!loading && (
        <>
          <Header></Header>
          <div className="showing">
            <h3 className="showing__title movie-title">Phim Đang Chiếu</h3>
            <div className="showing__content">{renderListFilm()}</div>
          </div>
          <Introduction></Introduction>
          <Footer></Footer>
          <ScrollToTop></ScrollToTop>
          <Popup></Popup>
        </>
      )}
    </>
  );
}

export default Showing;
