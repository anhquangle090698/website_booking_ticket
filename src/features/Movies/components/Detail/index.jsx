import bg from 'assets/images/bg_detail_movie.png';
import { openPopup } from 'features/Logic/logicSlice';
import { getShowtimeDetailMovie } from 'features/Movies/moviesSlice';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

function Detail(props) {
  const { detailMovie, showtimeDetail } = props; //DetailMovie
  const [renderShowtime, setRenderShowtime] = useState(false);
  const dispatch = useDispatch();

  const handleActiveClassLogo = (e) => {
    //Add class active logo
    let classNameLogo = 'detail__logo';
    let classNameLogoActive = document.getElementsByClassName('detail__logo active');
    if (classNameLogoActive) {
      while (classNameLogoActive[0]) {
        classNameLogoActive[0].classList.remove('active');
      }
    }
    e.target.className = classNameLogo.replace('detail__logo', 'detail__logo active');
  };

  const renderListSystem = () => {
    return detailMovie?.heThongRapChieu?.map((htrc, index) => {
      return (
        <div className="detail__system" key={index}>
          <img
            src={htrc.logo}
            alt={htrc.logo}
            className={index === 0 ? 'detail__logo active' : 'detail__logo'}
            onClick={async (e) => {
              handleActiveClassLogo(e);
              dispatch(await getShowtimeDetailMovie(htrc.maHeThongRap));
              setRenderShowtime(true);
            }}
          ></img>
        </div>
      );
    });
  };

  const renderListShowtimeFirstTime = () => {
    return detailMovie?.heThongRapChieu?.map((htrc, index) => {
      return index === 0
        ? htrc?.cumRapChieu?.map((crc, index) => {
            return (
              <div className="detail__showtime" key={index}>
                <h3 className="detail__name-cinema">{crc.tenCumRap}</h3>
                <p className="detail__calendar">
                  <i className="fa fa-bullhorn"></i> Lịch Chiếu
                </p>
                <div className="detail__block-time">
                  {crc?.lichChieuPhim?.slice(0, 10).map((stf, index) => {
                    return (
                      <NavLink
                        className="detail__time"
                        to={`/dat-ve/${stf.maLichChieu}`}
                        // target="_blank"
                        key={index}
                      >
                        <span> {moment(stf.ngayChieuGioChieu).format('hh:mm A')}</span>
                      </NavLink>
                    );
                  })}
                </div>
              </div>
            );
          })
        : '';
    });
  };

  const renderListShowtime = () => {
    return showtimeDetail[0]?.cumRapChieu?.map((stdt, index) => {
      return (
        <div className="detail__showtime" key={index}>
          <h3 className="detail__name-cinema">{stdt.tenCumRap}</h3>
          <p className="detail__calendar">
            <i className="fa fa-bullhorn"></i> Lịch Chiếu
          </p>
          <div className="detail__block-time">
            {stdt?.lichChieuPhim?.slice(0, 10).map((stf, index) => {
              return (
                <NavLink
                  className="detail__time"
                  to={`/dat-ve/${stf.maLichChieu}`}
                  // target="_blank"
                  key={index}
                >
                  <span> {moment(stf.ngayChieuGioChieu).format('hh:mm A')}</span>
                </NavLink>
              );
            })}
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div className="detail">
        <img src={bg} alt={bg} className="detail__image-bg"></img>
        <div className="gradient"></div>
        <div className="detail__content">
          <div className="detail__block-image">
            <img src={detailMovie.hinhAnh} alt={detailMovie.hinhAnh} className="detail__image" />
            <div className="detail__overlay">
              <i
                className="fa fa-play detail__icon-play"
                onClick={() => {
                  dispatch(openPopup(detailMovie.trailer));
                }}
              ></i>
            </div>
          </div>
          <div className="detail__block-information">
            <p className="detail__title">
              Ngày Khởi Chiếu :{' '}
              <span className="detail__text">
                {moment(detailMovie.ngayKhoiChieu).format('DD-MM-YYYY')}
              </span>
            </p>
            <h2 className="detail__name"> {detailMovie.tenPhim} </h2>
            <p className="detail__title">120 phút - 0 IMDb - 2D/Digital </p>
            <p className="detail__title">
              Đánh giá : <span className="detail__text">{detailMovie.danhGia}/10</span>{' '}
              <i className="fa fa-star detail__icon-star"></i>
            </p>
            <p className="detail__title detail__title--description">
              Nội dung :<span className="detail__text">{detailMovie.moTa}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="detail__showtime-movie">
        <div className="detail__list-system">{renderListSystem()}</div>
        <div className="detail__list-showtime">
          {!renderShowtime ? renderListShowtimeFirstTime() : renderListShowtime()}
        </div>
      </div>
    </>
  );
}

Detail.propTypes = {
  detailMovie: PropTypes.object.isRequired,
};

Detail.defaultProps = {
  detailMovie: {},
};

export default Detail;
