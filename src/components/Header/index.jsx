import React from 'react';
import PropTypes from 'prop-types';
import logo from 'assets/images/logo-600x600_g2.png';

Header.propTypes = {};

Header.defaultProps = {};

function Header(props) {
  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="header-brand">
          <img src={logo} alt="logo-g2" className="header-brand__logo" />
          <span className="header-brand__text">G2 Cinema</span>
        </div>
        <nav className="header-nav">
          <ul className="header-nav__list">
            <li className="header-nav__item">
              <a href="#" className="header-nav__link">
                Lịch Chiếu
              </a>
            </li>
            <li className="header-nav__item">
              <a href="#" className="header-nav__link">
                Cụm Rạp
              </a>
            </li>
            <li className="header-nav__item">
              <a href="#" className="header-nav__link">
                Tin Tức
              </a>
            </li>
            <li className="header-nav__item">
              <a href="#" className="header-nav__link">
                Khuyến Mãi
              </a>
            </li>
            <li className="header-nav__item">
              <a href="#" className="header-nav__link">
                Đăng Xuất
              </a>
            </li>
          </ul>
        </nav>
        <div className="header-login">
          <a className="btn btn__login">
            <i className="fa fa-user-alt header-login__icon"></i>
            <span className="header-login__text">Đăng nhập</span>
          </a>
        </div>

        <div className="header-user">
          <span className="header-user__name">Chào, Anh Quang |</span>
          <a href="#" className="header-user__info">
            Thông tin cá nhân
          </a>
        </div>

        <div className="header-close">
          <i className="fa fa-times header-close__icon"></i>
        </div>
      </header>

      {/* HEADER MOBILE */}
      <header className="header__mobile">
        <div className="header-brand header-brand--mobile">
          <img src={logo} alt="logo-g2" className="header-brand__logo header-brand__logo--mobile" />
        </div>
        <div className="header-bars">
            <i className="fa fa-bars header-bars__icon"></i>
        </div>
      </header>
    </>
  );
}

Header.propTypes = {};

export default Header;
