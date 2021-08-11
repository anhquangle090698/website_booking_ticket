import Footer from 'components/Footer';
import Header from 'components/Header';
import Introduction from 'components/Introduction';
import Loading from 'components/Loading';
import Popup from 'components/Popup';
import ScrollToTop from 'components/ScrollToTop';
import Movie from 'features/Movies/components/Movie';
import { useShowLoading } from 'hooks/customHook';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';

ResultSearch.propTypes = {
  loading: PropTypes.bool,
  movies: PropTypes.array.isRequired,
};

function ResultSearch(props) {
  //Custom hook show loading
  const loading = useShowLoading(1000);

  const movies = useSelector((state) => state.movies.listMoviesByNameFilm);

  //Render list movies
  const renderListMovie = () => {
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
      {loading && <Loading></Loading>}

      {!loading && (
        <>
          <Header></Header>
          <div className="result-search">
            <h3 className="result-search__title movie-title">Kết Quả Tìm Kiếm</h3>
            <div className="result-search__content">
              {typeof movies !== 'undefined' && movies.length > 0 ? (
                renderListMovie()
              ) : (
                <p className="result-search__no-result">Không tìm thấy kết quả</p>
              )}
            </div>
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

export default ResultSearch;
