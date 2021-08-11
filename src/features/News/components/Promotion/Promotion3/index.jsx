import promotion1 from 'assets/images/promotion-300x450_1.jpg';
import promotion2 from 'assets/images/promotion-300x450_2.jpg';
import promotion3 from 'assets/images/promotion-300x450_3.jpg';
import promotion4 from 'assets/images/promotion-300x450_4.jpg';
import pro31 from 'assets/images/promotion-film-3-1.jpg';
import pro32 from 'assets/images/promotion-film-3-2.jpg';
import pro3 from 'assets/images/promotion-film-3.jpg';
import Loading from 'components/Loading';
import { useShowLoading } from 'hooks/customHook';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import MovieVertical from '../../MoviesVertical';

Promotion3.propTypes = {
  loading: PropTypes.bool,
};
function Promotion3(props) {
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
                <h2 className="detail-news__title"> Tưng Bừng Hái "SAO" - Nhận Ưu Đãi Khủng</h2>
                <div className="detail-news__main">
                  <p className="detail-news__text">
                    <i>Galaxy Cinema ra mắt hệ thống tích điểm thành viên hoàn toàn mới!</i>
                  </p>
                  <p className="detail-news__text">
                    Từ 31.12.2019, các Star <b>sẽ được thăng hạng thành </b> Star, G-star, X-star
                    tương ứng với <b> tổng chi tiêu trong năm 2019</b> và{' '}
                    <b> nhận các ưu đãi đặc biệt mới</b>:
                  </p>
                  <p className="detail-news__block-image">
                    <img src={pro32} alt={pro32} width="600px" height="350px"></img>
                  </p>
                  <p className="detail-news__block-image">
                    <img src={pro3} alt={pro3} width="600px" height="350px"></img>
                  </p>
                  <p className="detail-news__text">
                    Sau khi phân loại lại thành viên dựa trên tổng chi tiêu trong năm 2019,{' '}
                    <b>mỗi khách hàng G-Star </b> được tặng <b> 02 vé 2D miễn phí </b> trong tài
                    khoản và <b>miễn phí đổi vị bắp</b> từ ngày 01/01/2020;{' '}
                    <b>khách hàng X-Star </b> được tặng <b>04 vé 2D miễn phí </b> trong tài khoản và{' '}
                    <b>miễn phí đổi vị bắp</b> từ ngày 01/01/2020.
                  </p>

                  <p className="detail-news__text">
                    Bên cạnh đó, Từ 01/01/2020, GLX sẽ thay đổi chính sách tích lũy điểm:{' '}
                    <b>10.000 VNĐ (chi tiêu) = 1 Star</b>
                  </p>
                  <p className="detail-news__text">
                    Thành viên mua bất kỳ sản phẩm vé xem phim, nước uống, thức ăn, combo … tại các
                    cụm rạp Galaxy hoặc thanh toán trực tuyến sẽ được tích lũy điểm thưởng tương ứng
                    vào tài khoản
                  </p>
                  <p className="detail-news__text">
                    Lưu ý: Đối với những giao dịch trực tuyến, thành viên phải đăng nhập vào tài
                    khoản mới được quyền tích điểm hợp lệ.
                  </p>
                  <p className="detail-news__text">
                    <b>Đổi quà hấp dẫn:</b>
                  </p>
                  <p className="detail-news__block-image">
                    <img src={pro31} alt={pro31} width="600px" height="350px"></img>
                  </p>
                  <p className="detail-news__text">
                    <b>Lưu ý: </b>
                  </p>
                  <p className="detail-news__text">
                    Điểm tích lũy còn tồn đọng sẽ bị trừ khỏi tài khoản thành viên sau ngày
                    31/12/2019
                  </p>
                  <p className="detail-news__text">
                    <b>Thông tin định danh thành viên</b> gồm có <b>email</b> và{' '}
                    <b>số điện thoại</b> bắt buộc phải hợp lệ.
                  </p>
                  <p className="detail-news__text">
                    <b>Số điện thoại không hợp lệ</b> là số điện thoại không liên lạc được hoặc số
                    điện thoại không thuộc sở hữu của chủ tài khoản thành viên ở thời điểm Galaxy
                    Cinema rà soát dữ liệu thành viên.
                  </p>
                  <p className="detail-news__text">
                    Với các trường hợp không hợp lệ, Galaxy Cinema có quyền xóa tài khoản thành viên
                    mà không cần thông báo trước.
                  </p>
                  <p className="detail-news__text">
                    Tài khoản thành viên không có đủ thông tin định danh gồm <b>Email</b> và{' '}
                    <b>số điện thoại hợp lệ</b> , Galaxy Cinema có quyền xóa tài khoản thành viên mà
                    không cần thông báo trước.
                  </p>
                  <p className="detail-news__text">
                    Điểm tích lũy có giá trị áp dụng tại tất cả các rạp Galaxy Cinema trên toàn
                    quốc.
                  </p>
                  <p className="detail-news__text">
                    Bạn có thể dễ dàng kiểm tra điểm tích lũy của mình trên Website Galaxy Cinema
                    hoặc Ứng dụng GLX trên điện thoại (Mobile App).
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
              <MovieVertical start={16} end={19}></MovieVertical>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Promotion3;
