import React from 'react';
import PropTypes from 'prop-types';

function Movie(props) {
  return (
    <div className="movie">
      <div className="movie-image">
        <img src={phim.hinhAnh} alt={phim.hinhAnh}></img>
        <div className="movie-image__overlay">
          <i
            className="fa fa-play movie-image__icon"
            // onClick={() => {
            //   dispatch(handleLogicPopupAction(`${phim.trailer}`, 'active'));
            // }}
          ></i>
        </div>
        <div className="movie-image__rating">
          <span className="movie-image__text">Đánh Giá</span>
          <span className="movie-image__number">{phim.danhGia}</span>
        </div>
      </div>
      <div className="movie-info">
        <p className="movie-info__name">{phim.tenPhim}</p>
        <div className="movie-info__overlay">     
            <NavLink
              to={`/lich-chieu-${phim.tenPhim.toLowerCase().split(' ').join('-')}/${phim.maPhim}`}
            >
              <button className="movie-info__button movie-info__button--orange">Mua Vé</button>
            </NavLink>
        </div>
      </div>
    </div>
  );
}

Movie.propTypes = {};

export default Movie;
