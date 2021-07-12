import React from 'react';
import banner_1 from 'assets/images/banner-2048x682_1.jpg';
import banner_2 from 'assets/images/banner-2048x682_2.jpg';
import banner_3 from 'assets/images/banner-2048x682_3.jpg';
import banner_4 from 'assets/images/banner-2048x682_4.png';
import banner_5 from 'assets/images/banner-2048x682_5.jpg';
import banner_6 from 'assets/images/banner-2048x682_6.jpg';
import banner_7 from 'assets/images/banner-2048x682_7.jpg';

// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, A11y, EffectFade, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y, EffectFade, Autoplay]);

function Carousel(props) {
  return (
    <div className="carousel">
      <Swiper
        slidesPerView={1}
        grabCursor={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
      >
        <SwiperSlide>
          <div className="carousel-item">
            <img src={banner_1} alt={banner_1} className="carousel-item__image"></img>
            <div
              className="carousel-item__play"
              // onClick={() => {
              //   dispatch(
              //     handleLogicPopupAction(
              //       "https://youtube.com/embed/uqAVt13jlr0",
              //       "active"
              //     )
              //   );
              // }}
            >
              <i className="fa fa-play carousel-item__icon"></i>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-item">
            <img src={banner_2} alt={banner_2} className="carousel-item__image"></img>
            <div
              className="carousel-item__play"
              // onClick={() => {
              //   dispatch(
              //     handleLogicPopupAction(
              //       "https://www.youtube.com/embed/bkY8ntjoQsg",
              //       "active"
              //     )
              //   );
              // }}
            >
              <i className="fa fa-play carousel-item__icon"></i>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-item">
            <img src={banner_3} alt={banner_3} className="carousel-item__image"></img>
            <div
              className="carousel-item__play"
              // onClick={() => {
              //   dispatch(
              //     handleLogicPopupAction(
              //       "https://www.youtube.com/embed/9m5HbGDFBrI",
              //       "active"
              //     )
              //   );
              // }}
            >
              <i className="fa fa-play carousel-item__icon"></i>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-item">
            <img src={banner_4} alt={banner_4} className="carousel-item__image"></img>
            <div
              className="carousel-item__play"
              // onClick={() => {
              //   dispatch(
              //     handleLogicPopupAction(
              //       "https://youtube.com/embed/1ZMmdjgarK8",
              //       "active"
              //     )
              //   );
              // }}
            >
              <i className="fa fa-play carousel-item__icon"></i>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-item">
            <img src={banner_7} alt={banner_7} className="carousel-item__image"></img>
            <div
              className="carousel-item__play"
              // onClick={() => {
              //   dispatch(
              //     handleLogicPopupAction(
              //       "https://www.youtube.com/embed/aqnzMJKRhho",
              //       "active"
              //     )
              //   );
              // }}
            >
              <i className="fa fa-play carousel-item__icon"></i>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-item">
            <img src={banner_5} alt={banner_5} className="carousel-item__image"></img>
            <div
              className="carousel-item__play"
              // onClick={() => {
              //   dispatch(
              //     handleLogicPopupAction(
              //       "https://youtube.com/embed/kEgUgrh2rdA",
              //       "active"
              //     )
              //   );
              // }}
            >
              <i className="fa fa-play carousel-item__icon"></i>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-item">
            <img src={banner_6} alt={banner_6} className="carousel-item__image"></img>
            <div
              className="carousel-item__play"
              // onClick={() => {
              //   dispatch(
              //     handleLogicPopupAction(
              //       "https://www.youtube.com/embed/rtqSUo-yTxU",
              //       "active"
              //     )
              //   );
              // }}
            >
              <i className="fa fa-play carousel-item__icon"></i>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
