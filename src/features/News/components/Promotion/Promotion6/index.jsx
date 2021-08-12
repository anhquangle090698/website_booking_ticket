import promotion5 from 'assets/images/promotion-300x450_5.jpg';
import promotion6 from 'assets/images/promotion-300x450_6.jpg';
import promotion7 from 'assets/images/promotion-300x450_7.png';
import promotion8 from 'assets/images/promotion-300x450_8.jpg';
import pro6 from 'assets/images/promotion-film-6.jpg';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Loading from 'components/Loading';
import ScrollToTop from 'components/ScrollToTop';
import { useShowLoading } from 'hooks/customHook';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import MovieVertical from '../../MoviesVertical';

Promotion6.propTypes = {
  loading: PropTypes.bool,
};
function Promotion6(props) {
  //Custom hook show loading
  const loading = useShowLoading(1000);

  return (
    <>
      {loading && <Loading></Loading>}

      {!loading && (
        <>
          <Header></Header>
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
                  <h2 className="detail-news__title">Tiệc Trà Tất Niên – Xem Phim Miễn Phí</h2>
                  <div className="detail-news__main">
                    <p className="detail-news__text">
                      <i>Từng bừng với tiệc trà mừng năm mới tại Galaxy Cinema!</i>
                    </p>
                    <p className="detail-news__text">
                      Không khí xuân tràn ngập khắp rạp chiếu, còn gì tuyệt hơn khi thưởng thức
                      những thước phim chất lượng, lại còn được miễn phí vé và thỏa thích nhâm nhi
                      trà cực đã.
                    </p>
                    <p className="detail-news__text">
                      Chần chờ gì nữa, hãy tới ngay Trạm Dừng Điện Ảnh Galaxy Cinema để check-in và
                      chính thức tham gia vào tuần lễ tiệc trà tất niên lớn nhất trong năm!
                    </p>

                    <p className="detail-news__text">
                      <b>Thời gian:</b>
                    </p>
                    <p className="detail-news__text">- 15.01.2021 – 31.01.2021</p>
                    <p className="detail-news__text">
                      <b>Điều kiện:</b>
                    </p>
                    <p className="detail-news__text">
                      - Miễn phí vé cho khách hàng có ngày sinh nhật trong khoảng từ 15/01 – 31/01.
                      (Áp dụng khi đi từ nhóm 05 người trở lên.)
                    </p>
                    <p className="detail-news__text">
                      - Miễn phí trà Táo/Red Velvet cho nhóm khách đi từ 05 người trở lên. (Áp dụng
                      cho tất cả thành viên trong nhóm.)
                    </p>
                    <p className="detail-news__text">
                      - Khách hàng phải xuất trình giấy tờ tùy thân để chứng minh ngày sinh.
                    </p>
                    <p className="detail-news__text">
                      - Mỗi khách chỉ được miễn phí 01 vé xem phim trong suốt thời gian diễn ra
                      chương trình.
                    </p>
                    <p className="detail-news__text">
                      - Vé xem phim được áp dụng trực tiếp cho suất chiếu trong ngày.
                    </p>
                    <p className="detail-news__text">
                      - Mỗi nhóm khách được miễn phí nước 01 lần trà Táo/Red Velvet.
                    </p>
                    <p className="detail-news__block-image">
                      <img src={pro6} alt={pro6} width="600px" height="350px"></img>
                    </p>
                  </div>
                </div>
                <div className="detail-news__related">
                  <h3 className="detail-news__subject">Bài viết liên quan</h3>
                  <NavLink to="/tin-tuc/khuyen-mai/ngay-tri-an-cua-galaxy-cinema-ngay-thu-hai-dau-tien-moi-thang">
                    <p className="detail-news__post">
                      <i className="fa fa-angle-double-right"></i>
                      Ngày Tri Ân Của Galaxy Cinema - Ngày Thứ Hai Đầu Tiên Mỗi Tháng
                    </p>
                  </NavLink>
                  <NavLink to="/tin-tuc/khuyen-mai/tiec-tra-tat-nien-xem-phim-mien-phi">
                    <p className="detail-news__post">
                      <i className="fa fa-angle-double-right"></i>
                      Tiệc Trà Tất Niên – Xem Phim Miễn Phí
                    </p>
                  </NavLink>
                  <NavLink to="/tin-tuc/khuyen-mai/galaxy-cinema-tri-an-thanh-vien">
                    <p className="detail-news__post">
                      <i className="fa fa-angle-double-right"></i>
                      Galaxy Cinema Tri Ân Thành Viên
                    </p>
                  </NavLink>
                  <NavLink to="/tin-tuc/khuyen-mai/xem-phim-hay-nhan-li-xi-chat">
                    <p className="detail-news__post">
                      <i className="fa fa-angle-double-right"></i>
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
                          <h3 className="detail-news__overlay-text">
                            Galaxy Cinema Tri Ân Thành Viên
                          </h3>
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
                          <h3 className="detail-news__overlay-text">
                            {' '}
                            Xem Phim Hay – Nhận Lì Xì Chất
                          </h3>
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
                <MovieVertical start={28} end={31}></MovieVertical>
              </div>
            </div>
          </div>
          <Footer></Footer>
          <ScrollToTop></ScrollToTop>
        </>
      )}
    </>
  );
}

export default Promotion6;
