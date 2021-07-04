import React from 'react';
import { NavLink } from 'react-router-dom';
// import Swiper core and required components
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
// Import Swiper styles
import 'swiper/swiper.scss';

// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, A11y, EffectFade, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y, EffectFade, Autoplay]);

function ListSlide(props) {
  return (
    <section className="list-slide">
      <h3 className="list-slide__title movie-title">Phim Đang Chiếu</h3>
      <div className="list-slide__content">
        <Swiper
          slidesPerView={1}
          navigation
          loop={true}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="row">
              {/* {renderListFilm(0, 8)} */}
              <div className="col-sm-6 col-md-4 col-lg-3">
                {/* <Movie phim={film}></Movie> */}
              </div>
              {/* <NavLink to="/phim-dang-chieu"> */}
                <a href="" className="list-slide__link"></a>
                Xem Thêm <i className="fa fa-angle-double-right list-slide__icon"></i>
              {/* </NavLink> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row">
              {/* {renderListFilm(8, 16)} */}
              <div className="col-sm-6 col-md-4 col-lg-3">
                {/* <Movie phim={film}></Movie> */}
              </div>
              {/* <NavLink to="/phim-dang-chieu"> */}
                <a href="" className="list-slide__link"></a>
                Xem Thêm <i className="fa fa-angle-double-right list-slide__icon"></i>
              {/* </NavLink> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row">
              {/* {renderListFilm(16, 24)} */}
              <div className="col-sm-6 col-md-4 col-lg-3">
                {/* <Movie phim={film}></Movie> */}
              </div>
              {/* <NavLink to="/phim-dang-chieu"> */}
                <a href="" className="list-slide__link"></a>
                Xem Thêm <i className="fa fa-angle-double-right list-slide__icon"></i>
              {/* </NavLink> */}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

ListSlide.propTypes = {};

export default ListSlide;
