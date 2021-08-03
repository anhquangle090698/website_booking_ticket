import React from 'react';
import PropTypes from 'prop-types';
import pro5 from 'assets/images/promotion-film-5.jpg';
import promotion5 from 'assets/images/promotion-300x450_5.jpg';
import promotion6 from 'assets/images/promotion-300x450_6.jpg';
import promotion7 from 'assets/images/promotion-300x450_7.png';
import promotion8 from 'assets/images/promotion-300x450_8.jpg';
import { NavLink } from 'react-router-dom';
import MovieVertical from '../../MoviesVertical';

function Promotion5(props) {
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
            <h2 className="detail-news__title">
              {' '}
              Ngày Tri Ân Của Galaxy Cinema - Ngày Thứ Hai Đầu Tiên Mỗi Tháng
            </h2>
            <div className="detail-news__main">
              <p className="detail-news__text">
                Từ lâu, chương trình <b>Ngày Tri Ân</b> Nhằm tạo điều kiện thuận lợi hơn cho các
                khách hàng thả ga xem phim đã trở nên quen thuộc với các khách hàng thân yêu của
                Galaxy Cinema.
              </p>
              <p className="detail-news__text">
                Vậy là, ngày 01/02/2021, các Stars sẽ được xem phim thả ga với giá vé đồng nhất{' '}
                <b> 45.000 đ</b> cho tất cả các phim 2D. Ngoài ra, trong <b>Ngày Tri Ân</b> này,
                khách hàng còn được nhận một ưu đãi đặc biệt - thoải mái thưởng thức bắp nước khi
                được 01 lần Refill miễn phí với tất cả các phần bắp và nước ngọt dạng ly (Pepsi,
                7Up, Mirinda Cam/Mirinda Sarsi), Lipton Trà Chanh 22oz và Combo đang bán tại rạp.
              </p>
              <p className="detail-news__block-image">
                <img src={pro5} alt={pro5} width="600px" height="350px"></img>
              </p>
              <p className="detail-news__text">Điều kiện chương trình:</p>

              <p className="detail-news__text">- Áp dụng cho ngày thứ 2 ĐẦU TIÊN của mỗi tháng</p>
              <p className="detail-news__text">
                - Áp dụng cho mọi loại ghế & suất chiếu (Không áp dụng cho suất chiếu đặc biệt &
                suất chiếu sớm)
              </p>
              <p className="detail-news__text">
                - Trong mọi trường hợp, quyết định của Galaxy Cinema là quyết định cuối cùng
              </p>
              <p className="detail-news__text">
                - Movie Voucher không áp dụng cho suất chiếu sớm (nếu có)
              </p>
              <p className="detail-news__text">
                * Áp dụng refill miễn phí 01 lần bắp ngọt/ nước ngọt ly đối với các hóa đơn:
              </p>
              <p className="detail-news__text">- Bắp</p>
              <p className="detail-news__text">
                - Nước ngọt ly (Pepsi/ 7 Up/ Mirinda cam/ Mirinda Sarsi)
              </p>
              <p className="detail-news__text">- Lipton Trà Chanh 22oz</p>
              <p className="detail-news__text">- Combo 1, Combo 2 & Combo phim</p>
              <p className="detail-news__text">
                ** Vui lòng xuất trình hóa đơn và hộp bắp/ ly nước khi yêu cầu refill, chỉ áp dụng
                refill bắp nước trước 22:00.
              </p>
              <p className="detail-news__text">
                Đừng bỏ lỡ Ngày Tri Ân tại <b>G2 Cinema</b> - <b>Ngày thứ Hai ĐẦU TIÊN</b> của mỗi
                tháng. Với <b>Ngày Tri Ân</b> , các Stars chắc chắn sẽ có thêm nhiều trải nghiệm
                tuyệt vời và một buổi xem phim thú vị tại <b>G2 Cinema</b>. Đặt vé ngay vào ngày
                01/02/2021 này nhé!
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
          <MovieVertical start={24} end={27}></MovieVertical>
        </div>
      </div>
    </div>
  );
}

Promotion5.propTypes = {};

export default Promotion5;
