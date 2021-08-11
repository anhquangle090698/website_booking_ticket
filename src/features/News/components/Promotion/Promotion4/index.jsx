import promotion1 from 'assets/images/promotion-300x450_1.jpg';
import promotion2 from 'assets/images/promotion-300x450_2.jpg';
import promotion3 from 'assets/images/promotion-300x450_3.jpg';
import promotion4 from 'assets/images/promotion-300x450_4.jpg';
import pro41 from 'assets/images/promotion-film-4-1.jpg';
import pro42 from 'assets/images/promotion-film-4-2.png';
import pro43 from 'assets/images/promotion-film-4-3.png';
import pro44 from 'assets/images/promotion-film-4-4.jpg';
import pro4 from 'assets/images/promotion-film-4.png';
import Loading from 'components/Loading';
import { useShowLoading } from 'hooks/customHook';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import MovieVertical from '../../MoviesVertical';

Promotion4.propTypes = {
  loading: PropTypes.bool,
};
function Promotion4(props) {
  //Custom hook show loading
  const loading = useShowLoading(1000);

  return (
    <>
      {loading && <Loading></Loading>}

      {!loading && (
        <div className="detail-news">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="detail-news__breadcrumb">
                <NavLink to="/">
                  <span className="detail-news__home">Trang chủ</span>
                </NavLink>
                <i className="fa fa-angle-right detail-news__breadcrumb-icon"></i>

                <span className="detail-news__home detail-news__home--active">Khuyến mãi</span>
              </div>
              <div className="detail-news__content">
                <h2 className="detail-news__title"> X2 Thành Viên - X2 Quyền Lợi</h2>
                <div className="detail-news__main">
                  <p className="detail-news__text">
                    Mở rộng quyền lợi thành viên <b>G2 Cinema</b> với tính năng đổi điểm mới dành
                    cho các Stars thân yêu. Tự do quy đổi SAO sang điểm VUI của TAPTAP để có thêm
                    nhiều lựa chọn ưu đãi hấp dẫn với đa dạng lĩnh vực từ ăn uống, mua sắm, giải trí
                    cho đến du lịch.
                  </p>
                  <p className="detail-news__block-image">
                    <img src={pro44} alt={pro44} width="600px" height="350px"></img>
                  </p>
                  <p className="detail-news__text">
                    <b>G2 Cinema</b> xin trân trọng giới thiệu sự đồng hành của Ứng dụng tích-đổi
                    điểm TAPTAP. Dễ dàng tích điểm thành viên và đổi ưu đãi cực “hời” ở nhiều thương
                    hiệu khác nhau như: The Pizza Company, Otoké Chicken, Chewy Chewy, The Coffee
                    Club, Jump Arena,...Tất cả trên cùng 1 ứng dụng TAPTAP.
                  </p>
                  <p className="detail-news__text">
                    Với TAPTAP, mỗi điểm nhận được là một niềm “VUI”. <br></br>
                    Các Stars sẽ có thêm lựa chọn quy đổi điểm SAO sang VUI và sử dụng các ưu đãi
                    độc quyền trên TAPTAP với tỉ lệ: 1 VUI = 10 SAO.
                  </p>

                  <p className="detail-news__text">Chỉ 4 bước đơn giản:</p>
                  <p className="detail-news__text">⭐ B1: Đăng nhập vào website Galaxy Cinema</p>
                  <p className="detail-news__block-image">
                    <img src={pro43} alt={pro43} width="600px" height="350px"></img>
                  </p>
                  <p className="detail-news__text">
                    ⭐ B2: Tại trang Thành Viên, chọn Giao dịch đổi VUI
                  </p>
                  <p className="detail-news__block-image">
                    <img src={pro4} alt={pro4} width="600px" height="350px"></img>
                  </p>
                  <p className="detail-news__text">
                    ⭐ B3: Nhập số VUI bạn muốn nhận, hệ thống sẽ tự động tính ra số SAO bạn cần
                    dùng để đổi
                  </p>
                  <p className="detail-news__block-image">
                    <img src={pro42} alt={pro42} width="600px" height="350px"></img>
                  </p>
                  <p className="detail-news__text">
                    ⭐ B4: Xác nhận và mở TAPTAP lên để đón VUI về
                  </p>
                  <p className="detail-news__block-image">
                    <img src={pro41} alt={pro41} width="600px" height="350px"></img>
                  </p>
                  <p className="detail-news__text">
                    Thật nhiều ưu đãi hấp dẫn trên TAPTAP đang chờ đợi bạn. Thử ngay nhé!
                  </p>
                </div>
              </div>
              <div className="detail-news__related">
                <h3 className="detail-news__subject">Bài viết liên quan</h3>
                <NavLink to="/tin-tuc/khuyen-mai/bap-milo-doc-la-chao-2021">
                  <p className="detail-news__post">
                    <i className="fa fa-angle-double-right"></i>
                    Bắp Milo Độc Lạ Chào 2021!
                  </p>
                </NavLink>
                <NavLink to="/tin-tuc/khuyen-mai/ngay-thanh-vien-milo-day">
                  <p className="detail-news__post">
                    <i className="fa fa-angle-double-right"></i>
                    Ngày Thành Viên - Milo Day
                  </p>
                </NavLink>
                <NavLink to="/tin-tuc/khuyen-mai/tung-bung-hai-sao-nhan-uu-dai-khung">
                  <p className="detail-news__post">
                    <i className="fa fa-angle-double-right"></i>
                    Tưng Bừng Hái "SAO" - Nhận Ưu Đãi Khủng
                  </p>
                </NavLink>
                <NavLink to="/tin-tuc/khuyen-mai/x2-thanh-vien-x2-quyen-loi">
                  <p className="detail-news__post">
                    <i className="fa fa-angle-double-right"></i>
                    X2 Thành Viên - X2 Quyền Lợi
                  </p>
                </NavLink>
              </div>
              <div className="detail-news__more">
                <h3 className="detail-news__subject">Tin khuyến mãi khác</h3>
                <div className="detail-news__list-more">
                  <div className="detail-news__item">
                    <img src={promotion4} alt={promotion4} className="detail-news__image"></img>
                    <div className="detail-news__overlay">
                      <NavLink to="/tin-tuc/khuyen-mai/bap-milo-doc-la-chao-2021">
                        <h3 className="detail-news__overlay-text">Bắp Milo Độc Lạ Chào 2021!</h3>
                      </NavLink>

                      <NavLink
                        to="/tin-tuc/khuyen-mai/bap-milo-doc-la-chao-2021"
                        className="detail-news__overlay-button"
                      >
                        Chi Tiết
                      </NavLink>
                    </div>
                  </div>
                  <div className="detail-news__item">
                    <img src={promotion2} alt={promotion2} className="detail-news__image"></img>
                    <div className="detail-news__overlay">
                      <NavLink to="/tin-tuc/khuyen-mai/ngay-thanh-vien-milo-day">
                        <h3 className="detail-news__overlay-text">Ngày Thành Viên - Milo Day</h3>
                      </NavLink>

                      <NavLink
                        to="/tin-tuc/khuyen-mai/ngay-thanh-vien-milo-day"
                        className="detail-news__overlay-button"
                      >
                        Chi Tiết
                      </NavLink>
                    </div>
                  </div>
                  <div className="detail-news__item">
                    <img src={promotion3} alt={promotion3} className="detail-news__image"></img>
                    <div className="detail-news__overlay">
                      <NavLink to="/tin-tuc/khuyen-mai/tung-bung-hai-sao-nhan-uu-dai-khung">
                        <h3 className="detail-news__overlay-text">
                          Tưng Bừng Hái "SAO" - Nhận Ưu Đãi Khủng
                        </h3>
                      </NavLink>

                      <NavLink
                        to="/tin-tuc/khuyen-mai/tung-bung-hai-sao-nhan-uu-dai-khung"
                        className="detail-news__overlay-button"
                      >
                        Chi Tiết
                      </NavLink>
                    </div>
                  </div>
                  <div className="detail-news__item">
                    <img src={promotion1} alt={promotion1} className="detail-news__image"></img>
                    <div className="detail-news__overlay">
                      <NavLink to="/tin-tuc/khuyen-mai/x2-thanh-vien-x2-quyen-loi">
                        <h3 className="detail-news__overlay-text">X2 Thành Viên - X2 Quyền Lợi</h3>
                      </NavLink>

                      <NavLink
                        to="/tin-tuc/khuyen-mai/x2-thanh-vien-x2-quyen-loi"
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
              <MovieVertical start={20} end={23}></MovieVertical>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Promotion4;
