import React from 'react';
import PropTypes from 'prop-types';
import pro7 from "assets/images/promotion-film-7.png";
import promotion5 from 'assets/images/promotion-300x450_5.jpg';
import promotion6 from 'assets/images/promotion-300x450_6.jpg';
import promotion7 from 'assets/images/promotion-300x450_7.png';
import promotion8 from 'assets/images/promotion-300x450_8.jpg';
import { NavLink } from 'react-router-dom';
import MovieVertical from '../../MoviesVertical';

function Promotion7(props) {
  return (
    <div className="detail-news">
      <div className="row">
        <div className="col-12 col-lg-8">
          <div className="detail-news__breadcrumb">
            <NavLink to="/">
              <span className="detail-news__home">Trang chủ</span>
            </NavLink>
            <i class="fa fa-angle-right detail-news__breadcrumb-icon"></i>

            <span className="detail-news__home detail-news__home--active">Khuyến mãi</span>
          </div>
          <div className="detail-news__content">
            <h2 className="detail-news__title">Galaxy Cinema Tri Ân Thành Viên</h2>
            <div className="detail-news__main">
            <p className="detail-news__text">
                    Tri ân tình cảm của các Stars, <b>G2 Cinema</b> dành tặng
                    hàng loạt ưu đãi chưa – từng – có mừng 2021.
                  </p>
                  <p className="detail-news__block-image">
                    <img
                      src={pro7}
                      alt={pro7}
                      width="600px"
                      height="350px"
                    ></img>
                  </p>
                  <p className="detail-news__text">
                    Thành viên Star chi tiêu đủ mức G-Star, X-Star trong năm
                    2020 sẽ được nâng hạng và hưởng quyền lợi mới tương ứng. Nếu
                    mức chi tiêu không đủ vẫn giữ nguyên hạng mức cũ.
                  </p>
                  <p className="detail-news__text">
                    Thành viên G-Star chi tiêu đủ mức X-Star trong năm 2020 sẽ
                    được nâng hạng và hưởng quyền lợi mới X-Star tương ứng. Nếu
                    mức chi tiêu không đủ vẫn giữ nguyên hạng mức cũ G-Star.
                  </p>

                  <p className="detail-news__text">
                    <b>Đặc biệt,</b>
                  </p>
                  <p className="detail-news__text">
                    Thành viên X-Star giữ nguyên hạng bất kể chi tiêu.
                  </p>
                  <p className="detail-news__text">
                    Vé miễn phí và Điểm tích lũy (Stars) sẽ được bảo lưu và tiếp
                    tục sử dụng trong năm 2021.
                  </p>
                  <p className="detail-news__text">
                    Cảm ơn các Stars đã đồng hành cùng <b>G2 Cinema</b> trong
                    một năm 2020 với rất nhiều ký ức khó quên.
                  </p>
            </div>
          </div>
          <div className="detail-news__related">
            <h3 className="detail-news__subject">Bài viết liên quan</h3>
            <NavLink to="/tin-tuc/khuyen-mai/ngay-tri-an-cua-galaxy-cinema-ngay-thu-hai-dau-tien-moi-thang">
              <p className="detail-news__post">
                <i class="fa fa-angle-double-right"></i>
                Ngày Tri Ân Của Galaxy Cinema - Ngày Thứ Hai Đầu Tiên Mỗi Tháng
              </p>
            </NavLink>
            <NavLink to="/tin-tuc/khuyen-mai/tiec-tra-tat-nien-xem-phim-mien-phi">
              <p className="detail-news__post">
                <i class="fa fa-angle-double-right"></i>
                Tiệc Trà Tất Niên – Xem Phim Miễn Phí
              </p>
            </NavLink>
            <NavLink to="/tin-tuc/khuyen-mai/galaxy-cinema-tri-an-thanh-vien">
              <p className="detail-news__post">
                <i class="fa fa-angle-double-right"></i>
                Galaxy Cinema Tri Ân Thành Viên
              </p>
            </NavLink>
            <NavLink to="/tin-tuc/khuyen-mai/xem-phim-hay-nhan-li-xi-chat">
              <p className="detail-news__post">
                <i class="fa fa-angle-double-right"></i>
                Xem Phim Hay – Nhận Lì Xì Chất
              </p>
            </NavLink>
          </div>
          <div className="detail-news__more">
            <h3 className="detail-news__subject">Tin khuyến mãi khác</h3>
            <div className="detail-news__list-more">
              <div className="detail-news__item">
                <img src={promotion5} alt={promotion5} className="detail-news__image"></img>
                <div className="detail-news__overlay">
                  <NavLink to="/tin-tuc/khuyen-mai/ngay-tri-an-cua-galaxy-cinema-ngay-thu-hai-dau-tien-moi-thang">
                    <h3 className="detail-news__overlay-text">
                      {' '}
                      Ngày Tri Ân Của Galaxy Cinema - Ngày Thứ Hai Đầu Tiên Mỗi Tháng
                    </h3>
                  </NavLink>

                  <NavLink
                    to="/tin-tuc/khuyen-mai/ngay-tri-an-cua-galaxy-cinema-ngay-thu-hai-dau-tien-moi-thang"
                    className="detail-news__overlay-button"
                  >
                    Chi Tiết
                  </NavLink>
                </div>
              </div>
              <div className="detail-news__item">
                <img src={promotion6} alt={promotion6} className="detail-news__image"></img>
                <div className="detail-news__overlay">
                  <NavLink to="/tin-tuc/khuyen-mai/tiec-tra-tat-nien-xem-phim-mien-phi">
                    <h3 className="detail-news__overlay-text">
                      {' '}
                      Tiệc Trà Tất Niên – Xem Phim Miễn Phí
                    </h3>
                  </NavLink>

                  <NavLink
                    to="/tin-tuc/khuyen-mai/tiec-tra-tat-nien-xem-phim-mien-phi"
                    className="detail-news__overlay-button"
                  >
                    Chi Tiết
                  </NavLink>
                </div>
              </div>
              <div className="detail-news__item">
                <img src={promotion7} alt={promotion7} className="detail-news__image"></img>
                <div className="detail-news__overlay">
                  <NavLink to="/tin-tuc/khuyen-mai/galaxy-cinema-tri-an-thanh-vien">
                    <h3 className="detail-news__overlay-text">Galaxy Cinema Tri Ân Thành Viên</h3>
                  </NavLink>

                  <NavLink
                    to="/tin-tuc/khuyen-mai/galaxy-cinema-tri-an-thanh-vien"
                    className="detail-news__overlay-button"
                  >
                    Chi Tiết
                  </NavLink>
                </div>
              </div>
              <div className="detail-news__item">
                <img src={promotion8} alt={promotion8} className="detail-news__image"></img>
                <div className="detail-news__overlay">
                  <NavLink to="/tin-tuc/khuyen-mai/xem-phim-hay-nhan-li-xi-chat">
                    <h3 className="detail-news__overlay-text"> Xem Phim Hay – Nhận Lì Xì Chất</h3>
                  </NavLink>

                  <NavLink
                    to="/tin-tuc/khuyen-mai/xem-phim-hay-nhan-li-xi-chat"
                    className="detail-news__overlay-button"
                  >
                    Chi Tiết
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <MovieVertical start={32} end={35}></MovieVertical>
        </div>
      </div>
    </div>
  );
}

Promotion7.propTypes = {};

export default Promotion7;
