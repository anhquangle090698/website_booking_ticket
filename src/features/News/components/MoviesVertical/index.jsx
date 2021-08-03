import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function MovieVertical(props) {
  const { start, end } = props;
  const movies = useSelector((state) => state.movies.listMovies);

  const renderMovie = () => {
    return movies.slice(start, end).map((movie, index) => {
      return (
        <div className="movie-vertical__item">
          <div className="movie-vertical__movie" key={index}>
            <img src={movie.hinhAnh} alt={movie.hinhAnh} className="movie-vertical__image" />
            <div className="movie-vertical__overlay">
              <NavLink to={`/trang-chu/lich-chieu/${movie.maPhim}`}>
                <button className="movie-vertical__button">Mua Vé</button>
              </NavLink>
            </div>
          </div>
          <p className="movie-vertical__name">{movie.tenPhim}</p>
        </div>
      );
    });
  };

  return (
    <div className="movie-vertical">
      <h3 className="detail-news__subject">Phim đang chiếu</h3>
      <div className="movie-vertical__list-movies">
          {renderMovie()}
      </div>
    </div>
  );
}

MovieVertical.propTypes = {};

export default MovieVertical;
