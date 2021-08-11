import promotion5 from 'assets/images/promotion-300x450_5.jpg';
import promotion6 from 'assets/images/promotion-300x450_6.jpg';
import promotion7 from 'assets/images/promotion-300x450_7.png';
import promotion8 from 'assets/images/promotion-300x450_8.jpg';
import pro8 from 'assets/images/promotion-film-8.jpg';
import Loading from 'components/Loading';
import { useShowLoading } from 'hooks/customHook';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import MovieVertical from '../../MoviesVertical';

Promotion8.propTypes = {
  loading: PropTypes.bool,
};
function Promotion8(props) {
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
                <h2 className="detail-news__title">Xem Phim Hay – Nhận Lì Xì Chất</h2>
                <div className="detail-news__main">
                  <p className="detail-news__text">
                    <i>Xuân an nhiên cạnh nhau là đủ.</i>
                  </p>

                  <p className="detail-news__text">
                    Trạm Dừng Chân Điện Ảnh <b>G2 Cinema</b> dành tặng lì xì may mắn cho các Stars,
                    khi đến thưởng thức loạt siêu phẩm mùa phim Tết đang được mong chờ nhất.
                  </p>
                  <p className="detail-news__text">
                    Hãy chuẩn bị bước vào chuyến phiêu lưu cùng Tí và nhóm bạn thân trong{' '}
                    <i>Trạng Tí Phiêu Lưu Ký</i> . Sau đấy là trải nghiệm một kỳ nghỉ ngắn hạn tại
                    Huế, để chiêm ngưỡng sự giàu sang vương giả tại Bạch Trà Viên với{' '}
                    <i>Gái Già Lắm Chiêu V</i> . Kế đó, đi tour về miền Tây sông nước, tham gia vào
                    những pha hành động rượt đuổi đầy thót tim bằng <i>Lật Mặt 48H</i> . Cuối cùng
                    di chuyển về Sài Gòn để cùng cười, cùng khóc với <i>Bố Già</i> tuy lắm chuyện
                    nhưng đáng mến.
                  </p>

                  <p className="detail-news__text">
                    Mua vé liền tay, nhận ngay lì xì nào các Stars ơi!
                  </p>
                  <p className="detail-news__block-image">
                    <img src={pro8} alt={pro8} width="600px" height="350px"></img>
                  </p>
                  <p className="detail-news__text">
                    <b>Điều kiện chương trình:</b>
                  </p>
                  <p className="detail-news__text">
                    - Khách hàng mua 02 vé xem phim sẽ được tặng 05 bao lì xì.
                  </p>
                  <p className="detail-news__text">- Áp dụng từ ngày 25/01 – 10/02/2021.</p>
                  <p className="detail-news__text">
                    - Không giới hạn số lần nhận bao lì xì của khách.
                  </p>
                  <p className="detail-news__text">
                    - Số lượng quà tặng có hạn, chương trình có thể kết thúc sớm hơn dự kiến.
                  </p>
                  <p className="detail-news__text">
                    - Trong mọi trường hợp quyết định của <b>G2 Cinema</b> là quyết định cuối cùng.
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
              <MovieVertical start={36} end={39}></MovieVertical>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Promotion8;
