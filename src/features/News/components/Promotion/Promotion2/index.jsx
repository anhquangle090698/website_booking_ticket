import promotion1 from 'assets/images/promotion-300x450_1.jpg';
import promotion2 from 'assets/images/promotion-300x450_2.jpg';
import promotion3 from 'assets/images/promotion-300x450_3.jpg';
import promotion4 from 'assets/images/promotion-300x450_4.jpg';
import pro2 from 'assets/images/promotion-film-2.jpg';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Loading from 'components/Loading';
import ScrollToTop from 'components/ScrollToTop';
import { useShowLoading } from 'hooks/customHook';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import MovieVertical from '../../MoviesVertical';

Promotion2.propTypes = {
  loading: PropTypes.bool,
};
function Promotion2(props) {
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
                  <h2 className="detail-news__title"> Ngày Thành Viên - Milo Day</h2>
                  <div className="detail-news__main">
                    <p className="detail-news__text">
                      Bước sang năm mới, Galaxy dành tặng các Stars thêm một ngày tràn đầy “yêu
                      thương” – <b>Milo Day</b>
                    </p>
                    <p className="detail-news__text">
                      Từ tháng 01/2021, G2 Cinema thực hiện chương trình vô cùng đặc biệt mang tên{' '}
                      <b>Milo Day</b>
                    </p>

                    <p className="detail-news__text">
                      Cụ thể vào <b>Thứ 4 cuối cùng mỗi tháng</b> , khách hàng thành viên Galaxy
                      Cinema khi mua Milo ly 22oz sẽ chỉ với giá <b>9.000 VNĐ</b> . Bạn chỉ cần
                      trình thẻ thành viên/ app Galaxy là đã có thể sở hữu một ly Milo ngọt ngào với
                      giá siêu “mềm”.
                    </p>
                    <p className="detail-news__block-image">
                      <img src={pro2} alt={pro2} width="600px" height="350px"></img>
                    </p>
                    <p className="detail-news__text">
                      Như vậy, sau <b>Ngày Tri Ân</b> và <b>Happy Day</b>, <b>Milo Day</b> sẽ là sự
                      kiện quan trọng tiếp theo của Galaxy mà bạn không nên bỏ qua!
                    </p>
                    <p className="detail-news__text">
                      Và đừng quên chương trình sẽ khởi động lần đầu tiên vào ngày 27/01/2021 nhé!
                    </p>
                    <p className="detail-news__text">
                      Tham dự buổi công chiếu ra mắt cùng các sao: cơ hội cùng các ngôi sao nổi
                      tiếng tham dự buổi ra mắt phim.
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
                          <h3 className="detail-news__overlay-text">
                            X2 Thành Viên - X2 Quyền Lợi
                          </h3>
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
                <MovieVertical start={12} end={15}></MovieVertical>
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

export default Promotion2;
