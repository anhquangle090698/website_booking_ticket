import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
// import Swiper core and required components and swiper styles
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/swiper.scss';
import SwiperCore, { Navigation, Pagination, A11y, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useSelector } from 'react-redux';
import Movie from '../Movie';
// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y, EffectFade, Autoplay]);

ListSlide.propTypes = {
  movies: PropTypes.array.isRequired,
};

ListSlide.defaultProps = {
  movies: [],
};

function ListSlide(props) {
  const movies = useSelector((state) => state.movies.listMovies);

  const renderMovies = (startMovie, endMovie) => {
    return movies.slice(startMovie, endMovie).map((movie, index) => {
      return (
        <div className="col-6 col-md-4 col-lg-3" key={index}>
          <Movie movie={movie}></Movie>
        </div>
      );
    });
  };

  return (
    <section className="list-slide" id="lich-chieu">
      <h3 className="list-slide__title movie-title">Phim Đang Chiếu</h3>
      <div className="list-slide__content">
        <Swiper
          slidesPerView={1}
          navigation
          loop={true}
        >
          <SwiperSlide>
            <div className="row">{renderMovies(0, 8)}</div>
            {/* <NavLink to="/phim-dang-chieu"> */}
            <a href="" className="list-slide__link">
              Xem Thêm <i className="fa fa-angle-double-right list-slide__icon"></i>
            </a>
            {/* </NavLink> */}
          </SwiperSlide>
          <SwiperSlide>
            <div className="row">{renderMovies(8, 16)}</div>
            {/* <NavLink to="/phim-dang-chieu"> */}
            <a href="" className="list-slide__link">
              Xem Thêm <i className="fa fa-angle-double-right list-slide__icon"></i>
            </a>
            {/* </NavLink> */}
          </SwiperSlide>
          <SwiperSlide>
            <div className="row">{renderMovies(16, 24)}</div>
            {/* <NavLink to="/phim-dang-chieu"> */}
            <a href="" className="list-slide__link">
              Xem Thêm <i className="fa fa-angle-double-right list-slide__icon"></i>
            </a>
            {/* </NavLink> */}
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default ListSlide;
