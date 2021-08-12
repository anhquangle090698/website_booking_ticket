import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SwiperCore, { A11y, Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
// import Swiper core and required components and swiper styles
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import InputSearch from '../InputSearch';
import Movie from '../Movie';

// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y, EffectFade, Autoplay]);

ListSlide.propTypes = {
  movies: PropTypes.array,
  renderMovies: PropTypes.func,
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
    <section className="list-slide" id="lich-chieu" data-aos="fade-up">
      <h3 className="list-slide__title movie-title">Phim Đang Chiếu</h3>

      <div className="list-slide__content">
        <InputSearch></InputSearch>
        <Swiper slidesPerView={1} navigation loop={true}>
          <SwiperSlide>
            <div className="row">{renderMovies(0, 8)}</div>
            <NavLink to="/trang-chu/phim-dang-chieu" className="list-slide__link">
              Xem Thêm <i className="fa fa-angle-double-right list-slide__icon"></i>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row">{renderMovies(8, 16)}</div>
            <NavLink to="/trang-chu/phim-dang-chieu" className="list-slide__link">
              Xem Thêm <i className="fa fa-angle-double-right list-slide__icon"></i>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row">{renderMovies(24, 32)}</div>
            <NavLink to="/trang-chu/phim-dang-chieu" className="list-slide__link">
              Xem Thêm <i className="fa fa-angle-double-right list-slide__icon"></i>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row">{renderMovies(32, 40)}</div>
            <NavLink to="/trang-chu/phim-dang-chieu" className="list-slide__link">
              Xem Thêm <i className="fa fa-angle-double-right list-slide__icon"></i>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row">{renderMovies(40, 48)}</div>
            <NavLink to="/trang-chu/phim-dang-chieu" className="list-slide__link">
              Xem Thêm <i className="fa fa-angle-double-right list-slide__icon"></i>
            </NavLink>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default ListSlide;
