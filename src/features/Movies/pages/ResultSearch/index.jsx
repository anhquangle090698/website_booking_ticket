import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Header';
import Footer from 'components/Footer';
import ScrollToTop from 'components/ScrollToTop';
import Introduction from 'components/Introduction';
import { useDispatch, useSelector } from 'react-redux';
import Movie from 'features/Movies/components/Movie';
import { getListMoviesAsync } from 'features/Movies/moviesSlice';

function ResultSearch(props) {
  const movies = useSelector((state) => state.movies.listMoviesByNameFilm);

  const renderListFilm = () => {
    return movies?.map((film, index) => {
      return (
        <div className="result-search__item" key={index}>
          <Movie movie={film}></Movie>
        </div>
      );
    });
  };

  return (
    <>
      <Header></Header>
      <div className="result-search">
        <h3 className="result-search__title movie-title">Kết Quả Tìm Kiếm</h3>
        <div className="result-search__content">
          {typeof movies !== 'undefined' && movies.length > 0 ? (
            renderListFilm()
          ) : (
            <p className="result-search__no-result">Không tìm thấy kết quả</p>
          )}
        </div>
      </div>
      <Introduction></Introduction>
      <Footer></Footer>
      <ScrollToTop></ScrollToTop>
    </>
  );
}

ResultSearch.propTypes = {};

export default ResultSearch;
