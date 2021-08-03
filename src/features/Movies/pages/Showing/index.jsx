import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Header';
import Footer from 'components/Footer';
import ScrollToTop from 'components/ScrollToTop';
import Introduction from 'components/Introduction';
import { useDispatch, useSelector } from 'react-redux';
import Movie from 'features/Movies/components/Movie';
import { getListMoviesAsync } from 'features/Movies/moviesSlice';

function Showing(props) {
  const movies = useSelector((state) => state.movies.listMovies);
  const dispatch = useDispatch();
  //Api get list film
  useEffect(() => {
    const fetchDataFilm = async () => {
      dispatch(await getListMoviesAsync());
    };

    fetchDataFilm();
  }, []);
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
      <Header></Header>
      <div className="showing">
        <h3 className="showing__title movie-title">Phim Đang Chiếu</h3>
        <div className="showing__content">{renderListFilm()}</div>
      </div>
      <Introduction></Introduction>
      <Footer></Footer>
      <ScrollToTop></ScrollToTop>
    </>
  );
}

Showing.propTypes = {};

export default Showing;
