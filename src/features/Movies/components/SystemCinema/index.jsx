import appStore from 'assets/images/app-store-badge.png';
import googlePlay from 'assets/images/google-play-store.png';
import { getListShowtimeByC, getListShowTimeSystemCinemaAsync } from 'features/Movies/moviesSlice';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

SystemCinema.propTypes = {
  renderShowtime: PropTypes.bool,
  lSystemCinema: PropTypes.array,
  lShowtime: PropTypes.array,
  lShowtimeByC: PropTypes.array,
  handleActiveClassLogo: PropTypes.func,
  handleActiveClassCinema: PropTypes.func,
  renderListSystem: PropTypes.func,
  renderListCinema: PropTypes.func,
  renderListShowtime: PropTypes.func,
  renderListShowtimeByC: PropTypes.func,
};

function SystemCinema(props) {
  const [renderShowtime, setRenderShowtime] = useState(false);
  
  const dispatch = useDispatch();

  const lSystemCinema = useSelector((state) => state.movies.listSystemCinema);
  const lShowtime = useSelector((state) => state.movies.listShowtime);
  const lShowtimeByC = useSelector((state) => state.movies.listShowtimeByC);

  const handleActiveClassLogo = (e) => {
    //Add class active logo
    let classNameLogo = 'system-cinema__logo';
    let classNameLogoActive = document.getElementsByClassName('system-cinema__logo active');
    if (classNameLogoActive) {
      while (classNameLogoActive[0]) {
        classNameLogoActive[0].classList.remove('active');
      }
    }
    e.target.className = classNameLogo.replace('system-cinema__logo', 'system-cinema__logo active');

    //Reset class active cinema
    let classNameCinema = document.getElementsByClassName('system-cinema__cinema');
    let classNameCinemaActive = document.getElementsByClassName('system-cinema__cinema active');
    if (classNameCinemaActive) {
      while (classNameCinemaActive[0]) {
        classNameCinemaActive[0].classList.remove('active');
      }
    }

    classNameCinema[0].classList.add('active');
  };

  const handleActiveClassCinema = (e) => {
    //Add class active cinema
    let classNameCinema = 'system-cinema__cinema';
    let classNameCinemaActive = document.getElementsByClassName('system-cinema__cinema active');
    if (classNameCinemaActive) {
      while (classNameCinemaActive[0]) {
        classNameCinemaActive[0].classList.remove('active');
      }
    }
    e.target.className = classNameCinema.replace(
      'system-cinema__cinema',
      'system-cinema__cinema active'
    );
  };

  const renderListSystem = () => {
    return lSystemCinema?.map((lsc, index) => {
      return (
        <div className="system-cinema__system" key={index}>
          <img
            src={lsc.logo}
            alt={lsc.logo}
            className={index === 0 ? 'system-cinema__logo active' : 'system-cinema__logo'}
            onClick={async (e) => {
              handleActiveClassLogo(e);
              setRenderShowtime(false);
              dispatch(await getListShowTimeSystemCinemaAsync(lsc.maHeThongRap));
            }}
          ></img>
        </div>
      );
    });
  };

  const renderListCinema = () => {
    return lShowtime[0]?.lstCumRap?.map((lc, index) => {
      return (
        <div
          className={index === 0 ? 'system-cinema__cinema active' : 'system-cinema__cinema'}
          key={index}
          onClick={async (e) => {
            handleActiveClassCinema(e);
            setRenderShowtime(true);
            dispatch(await getListShowtimeByC(lc.maCumRap));
          }}
        >
          <p className="system-cinema__name-cinema">
            <span className="system-cinema__name-cinema--highlight">
              {lc.tenCumRap.split('-')[0]}
            </span>
            - {lc.tenCumRap.split('-')[1]}
          </p>
          <p className="system-cinema__address">{lc.diaChi}</p>
        </div>
      );
    });
  };

  const renderListShowtime = () => {
    return lShowtime[0]?.lstCumRap[0]?.danhSachPhim.map((lst, index) => {
      return (
        <div className="system-cinema__showtime" key={index}>
          <div className="system-cinema__block">
            <img src={lst.hinhAnh} alt={lst.hinhAnh} className="system-cinema__image-film" />
            <div className="system-cinema__block-info">
              <span className="system-cinema__name-film">{lst.tenPhim}</span>
              <span className="system-cinema__description">120 phút - 0 IMDb - 2D/Digital</span>
            </div>
          </div>
          <p className="system-cinema__text">
            <i className="fa fa-bullhorn"></i> Lịch Chiếu
          </p>
          <div className="system-cinema__block-time">
            {lst?.lstLichChieuTheoPhim?.slice(0, 10).map((stbf, index) => {
              return (
                <NavLink
                  className="system-cinema__time"
                  to={`/dat-ve/${stbf.maLichChieu}`}
                  // target="_blank"
                  key={index}
                >
                  <span> {moment(stbf.ngayChieuGioChieu).format('hh:mm A')}</span>
                </NavLink>
              );
            })}
          </div>
        </div>
      );
    });
  };

  const renderListShowtimeByC = () => {
    return lShowtimeByC[0]?.danhSachPhim?.map((lstc, index) => {
      return (
        <div className="system-cinema__showtime" key={index}>
          <div className="system-cinema__block">
            <img src={lstc.hinhAnh} alt={lstc.hinhAnh} className="system-cinema__image-film" />
            <div className="system-cinema__block-info">
              <span className="system-cinema__name-film">{lstc.tenPhim}</span>
              <span className="system-cinema__description">120 phút - 0 IMDb - 2D/Digital</span>
            </div>
          </div>
          <p className="system-cinema__text">
            <i className="fa fa-bullhorn"></i> Lịch Chiếu
          </p>
          <div className="system-cinema__block-time">
            {lstc?.lstLichChieuTheoPhim?.slice(0, 10).map((stbf, index) => {
              return (
                <NavLink
                  className="system-cinema__time"
                  to={`/dat-ve/${stbf.maLichChieu}`}
                  // target="_blank"
                  key={index}
                >
                  <span> {moment(stbf.ngayChieuGioChieu).format('hh:mm A')}</span>
                </NavLink>
              );
            })}
          </div>
        </div>
      );
    });
  };

  return (
    <section className="system-cinema" id="cum-rap" data-aos="fade-right">
      <h3 className="system-cinema__title movie-title">Hệ Thống Cụm Rạp</h3>
      <div className="system-cinema__content">
        <div className="system-cinema__mobile">
          <h4 className="system-cinema__alert">Vui lòng tải ứng dụng để xem chi tiết</h4>
          <div className="system-cinema__store">
            <a href="https://www.apple.com/app-store/">
              <img src={appStore} alt={appStore} className="system-cinema__image" />
            </a>
            <a href="https://play.google.com/store?hl=vi&gl=US">
              <img src={googlePlay} alt={googlePlay} className="system-cinema__image" />
            </a>
          </div>
        </div>
        <div className="system-cinema__desktop">
          <div className="system-cinema__list-system">{renderListSystem()}</div>
          <div className="system-cinema__list-cinema">{renderListCinema()}</div>
          <div className="system-cinema__list-showtime" data-aos="zoom-in">
            {!renderShowtime ? renderListShowtime() : renderListShowtimeByC()}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SystemCinema;
