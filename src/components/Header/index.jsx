import React from 'react';
import PropTypes from 'prop-types';
import logo from 'assets/images/logo-600x600_g2.png';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { USER_LOGIN, ACCESS_TOKEN } from 'utils/config';
import { useDispatch } from 'react-redux';
import { handleSignOut } from 'features/Login/loginSlice';

Header.propTypes = {};

Header.defaultProps = {};

const handleToggleNav = () => {
  const header = document.getElementById('header');
  header.classList.toggle('show');
};

function Header(props) {
  const informationUser = useSelector((state) => state.login.informationUser);
  const account = useSelector((state) => state.user.informationAccount);
  const dispatch = useDispatch();

  return (
    <>
      {/* HEADER */}
      <header className="header" id="header">
        <div className="header-brand">
          <NavLink to="/">
            <img src={logo} alt="logo-g2" className="header-brand__logo" />
          </NavLink>
          <NavLink to="/">
            <span className="header-brand__text">G2 Cinema</span>
          </NavLink>
        </div>
        <nav className="header-nav">
          <ul className="header-nav__list">
            <li className="header-nav__item">
              <a
                href="#lich-chieu"
                className="header-nav__link"
                onClick={() => {
                  handleToggleNav();
                }}
              >
                Lịch Chiếu
              </a>
            </li>
            <li className="header-nav__item">
              <a
                href="#cum-rap"
                className="header-nav__link"
                onClick={() => {
                  handleToggleNav();
                }}
              >
                Cụm Rạp
              </a>
            </li>
            <li className="header-nav__item">
              <a
                href="#tin-tuc"
                className="header-nav__link"
                onClick={() => {
                  handleToggleNav();
                }}
              >
                Tin Tức
              </a>
            </li>
            <li className="header-nav__item">
              <a
                href="#khuyen-mai"
                className="header-nav__link"
                onClick={() => {
                  handleToggleNav();
                }}
              >
                Khuyến Mãi
              </a>
            </li>
            {informationUser.taiKhoan ? (
              <li className="header-nav__item header-nav__item--logout">
                <NavLink
                  className="header-nav__link"
                  to="/"
                  onClick={() => {
                    localStorage.removeItem(USER_LOGIN);
                    localStorage.removeItem(ACCESS_TOKEN);

                    handleToggleNav();

                    dispatch(handleSignOut());
                  }}
                >
                  Đăng xuất
                </NavLink>
              </li>
            ) : (
              ''
            )}
          </ul>
        </nav>

        {informationUser.taiKhoan ? (
          <div className="header-user">
            <div className="header-user__dropdown">
              <span className="header-user__name">{account.hoTen ? `Chào, ${account.hoTen} |` : `Chào, ${informationUser.hoTen} |`}</span>
              <div className="header-user__content">
                <NavLink
                  className="header-user__logout"
                  to="/"
                  onClick={() => {
                    localStorage.removeItem(USER_LOGIN);
                    localStorage.removeItem(ACCESS_TOKEN);

                    dispatch(handleSignOut());
                  }}
                >
                  Đăng xuất
                </NavLink>
              </div>
            </div>

            <NavLink to="/tai-khoan-cua-toi" className="header-user__info">
              Thông tin cá nhân
            </NavLink>
          </div>
        ) : (
          <div className="header-login">
            <NavLink to="/dang-nhap" className="btn btn__login">
              <i className="fa fa-user-alt header-login__icon"></i>
              <span className="header-login__text">Đăng nhập</span>
            </NavLink>
          </div>
        )}

        <div
          className="header-close"
          onClick={() => {
            handleToggleNav();
          }}
        >
          <i className="fa fa-times header-close__icon"></i>
        </div>
      </header>

      {/* HEADER MOBILE */}
      <section className="header-mobile">
        <div className="header-brand header-brand--mobile">
          <img src={logo} alt="logo-g2" className="header-brand__logo header-brand__logo--mobile" />
        </div>
        <div
          className="header-bars"
          onClick={() => {
            handleToggleNav();
          }}
        >
          <i className="fa fa-bars header-bars__icon"></i>
        </div>
      </section>
    </>
  );
}

Header.propTypes = {};

export default Header;
