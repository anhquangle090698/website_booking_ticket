import React from 'react';
import PropTypes from 'prop-types';

Movie.propTypes = {
  movies: PropTypes.array.isRequired,
};

Movie.defaultProps = {
  movies: [],
};

function Movie(props) {
  const { movie } = props;

  return (
    <div className="movie">
      <div className="movie-box">
        <img src={movie.hinhAnh} alt={movie.hinhAnh} className="movie-box__image"></img>
        <div className="movie-box__overlay">
          <i
            className="fa fa-play movie-box__icon"
            // onClick={() => {
            //   dispatch(handleLogicPopupAction(`${movie.trailer}`, 'active'));
            // }}
          ></i>
        </div>
        <div className="movie-box__rating">
          <span className="movie-box__text">Đánh Giá</span>
          <span className="movie-box__number">{movie.danhGia}</span>
        </div>
      </div>
      <div className="movie-info">
        <p className="movie-info__name">{movie.tenPhim}</p>
        <div className="movie-info__overlay">
          {/* <NavLink */}
          {/* to={`/lich-chieu-${movie.tenPhim.toLowerCase().split(' ').join('-')}/${movie.maPhim}`} */}
          {/* > */}
          <button className="movie-info__button movie-info__button--orange">Mua Vé</button>
          {/* </NavLink> */}
        </div>
      </div>
    </div>
  );
}

export default Movie;
