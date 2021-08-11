import promotion1 from 'assets/images/promotion-300x450_1.jpg';
import promotion2 from 'assets/images/promotion-300x450_2.jpg';
import promotion3 from 'assets/images/promotion-300x450_3.jpg';
import promotion4 from 'assets/images/promotion-300x450_4.jpg';
import pro1 from 'assets/images/promotion-film-1.jpg';
import Loading from 'components/Loading';
import { useShowLoading } from 'hooks/customHook';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import MovieVertical from '../../MoviesVertical';

Promotion1.propTypes = {
  loading: PropTypes.bool,
};
function Promotion1(props) {
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
                <h2 className="detail-news__title">Bắp Milo Độc Lạ Chào 2021!</h2>
                <div className="detail-news__main">
                  <p className="detail-news__text">
                    Đã ra rạp xem phim thì mười người hết… mười một đều “phải lòng” món bắp rang
                    ngọt ngào thơm phức. Mùi bắp rang bơ tỏa khắp từ sảnh chờ cho đến phòng chiếu,
                    giúp việc thưởng thức phim trở nên hấp dẫn gấp trăm lần.
                  </p>
                  <p className="detail-news__block-image">
                    <img src={pro1} alt={pro1} width="600px" height="350px"></img>
                  </p>
                  <p className="detail-news__text">
                    Giữ chân biết bao “mọt phim” suốt nhiều năm qua nhờ bắp ngọt, bắp phô mai và bắp
                    caramel; giờ đây, Galaxy Cinema cho ra mắt vị bắp mới – vô cùng quyến rũ mang
                    tên bắp Milo ( thêm 9.000 đ).
                  </p>

                  <p className="detail-news__text">
                    Đến Galaxy Cinema để được đắm chìm trong món bắp mới ngọt ngào thơm hương Milo
                    nào các Stars!
                  </p>
                  <p className="detail-news__text">
                    Đã ra rạp xem phim thì mười người hết… mười một đều “phải lòng” món bắp rang
                    ngọt ngào thơm phức. Mùi bắp rang bơ tỏa khắp từ sảnh chờ cho đến phòng chiếu,
                    giúp việc thưởng thức phim trở nên hấp dẫn gấp trăm lần. Giữ chân biết bao “mọt
                    phim” suốt nhiều năm qua nhờ bắp ngọt, bắp phô mai và bắp caramel; giờ đây,
                    Galaxy Cinema cho ra mắt vị bắp mới – vô cùng quyến rũ mang tên bắp Milo ( thêm
                    9.000 đ). Đến Galaxy Cinema để được đắm chìm trong món bắp mới ngọt ngào thơm
                    hương Milo nào các Stars!
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
              <MovieVertical start={8} end={11}></MovieVertical>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Promotion1;
