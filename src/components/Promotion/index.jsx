import React from 'react';
//Promotion images from asset image
import promotion1 from 'assets/images/promotion-300x450_1.jpg';
import promotion2 from 'assets/images/promotion-300x450_2.jpg';
import promotion3 from 'assets/images/promotion-300x450_3.jpg';
import promotion4 from 'assets/images/promotion-300x450_4.jpg';
import promotion5 from 'assets/images/promotion-300x450_5.jpg';
import promotion6 from 'assets/images/promotion-300x450_6.jpg';
import promotion7 from 'assets/images/promotion-300x450_7.png';
import promotion8 from 'assets/images/promotion-300x450_8.jpg';
import { NavLink } from 'react-router-dom';

function Promotion(props) {
  return (
    <div className="promotion" id="khuyen-mai">
      <div className="promotion__title movie-title">Khuyến Mãi</div>
      <div className="promotion__content">
        <div className="row">
          <div className="col-6 col-md-4 col-lg-3">
            <div className="promotion__item">
              <img src={promotion4} alt={promotion4} className="promotion__image" />
              <div className="promotion__overlay">
                <h4 className="promotion__name">Bắp Milo Độc Lạ Chào 2021!</h4>

                <p className="promotion__description">
                  {' '}
                  Đến G2 Cinema để được đắm chìm trong món bắp mới ngọt ngào thơm hương Milo nào các
                  Stars!
                </p>
                <NavLink
                  to="/tin-tuc/khuyen-mai/bap-milo-doc-la-chao-2021"
                  className="promotion__more"
                >
                  Chi Tiết
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <div className="promotion__item">
              <img src={promotion2} alt={promotion2} className="promotion__image" />
              <div className="promotion__overlay">
                <h4 className="promotion__name">Ngày Thành Viên - Milo Day</h4>
                <p className="promotion__description">
                  {' '}
                  Bước sang năm mới, Galaxy dành tặng các Stars thêm một ngày tràn đầy “yêu thương”
                  – Milo Day.
                </p>
                <NavLink
                  to="/tin-tuc/khuyen-mai/ngay-thanh-vien-milo-day"
                  className="promotion__more"
                >
                  Chi Tiết
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <div className="promotion__item">
              <img src={promotion3} alt={promotion3} className="promotion__image" />
              <div className="promotion__overlay">
                <h4 className="promotion__name">TƯNG BỪNG HÁI "SAO" – NHẬN ƯU ĐÃI KHỦNG</h4>
                <p className="promotion__description">
                  {' '}
                  G2 Cinema ra mắt hệ thống tích điểm thành viên hoàn toàn mới!
                </p>
                <NavLink
                  to="/tin-tuc/khuyen-mai/tung-bung-hai-sao-nhan-uu-dai-khung"
                  className="promotion__more"
                >
                  Chi Tiết
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <div className="promotion__item">
              <img src={promotion1} alt={promotion1} className="promotion__image" />
              <div className="promotion__overlay">
                <h4 className="promotion__name"> X2 Thành Viên - X2 Quyền Lợi</h4>
                <p className="promotion__description">
                  {' '}
                  Mở rộng quyền lợi thành viên Galaxy Cinema với tính năng đổi điểm mới dành cho các
                  Stars thân yêu. Tự do quy đổi SAO sang điểm VUI của TAPTAP để có thêm nhiều lựa
                  chọn ưu đãi hấp dẫn với đa dạng lĩnh vực từ ăn uống, mua sắm, giải trí cho đến du
                  lịch.
                </p>
                <NavLink
                  to="/tin-tuc/khuyen-mai/x2-thanh-vien-x2-quyen-loi"
                  className="promotion__more"
                >
                  Chi Tiết
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <div className="promotion__item">
              <img src={promotion5} alt={promotion5} className="promotion__image" />
              <div className="promotion__overlay">
                <h4 className="promotion__name">
                  Ngày Tri Ân Của G2 Cinema - Ngày Thứ Hai ĐẦU TIÊN Mỗi Tháng
                </h4>
                <p className="promotion__description">
                  {' '}
                  Từ lâu, chương trình Ngày Tri Ân Nhằm tạo điều kiện thuận lợi hơn cho các khách
                  hàng thả ga xem phim đã trở nên quen thuộc với các khách hàng thân yêu của Galaxy
                  Cinema.
                </p>
                <NavLink
                  to="/tin-tuc/khuyen-mai/ngay-tri-an-cua-galaxy-cinema-ngay-thu-hai-dau-tien-moi-thang"
                  className="promotion__more"
                >
                  Chi Tiết
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <div className="promotion__item">
              <img src={promotion6} alt={promotion6} className="promotion__image" />
              <div className="promotion__overlay">
                <h4 className="promotion__name">Tiệc Trà Tất Niên – Xem Phim Miễn Phí</h4>
                <p className="promotion__description">
                  Không khí xuân tràn ngập khắp rạp chiếu, còn gì tuyệt hơn khi được nhận vé miễn
                  phí, thưởng thức những thước phim chất lượng và thỏa thích nhâm nhi trà cực đã.
                </p>
                <NavLink
                  to="/tin-tuc/khuyen-mai/tiec-tra-tat-nien-xem-phim-mien-phi"
                  className="promotion__more"
                >
                  Chi Tiết
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <div className="promotion__item">
              <img src={promotion7} alt={promotion7} className="promotion__image" />
              <div className="promotion__overlay">
                <h4 className="promotion__name">G2 Cinema Tri Ân Thành Viên</h4>
                <NavLink
                  to="/tin-tuc/khuyen-mai/galaxy-cinema-tri-an-thanh-vien"
                  className="promotion__more"
                >
                  Chi Tiết
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <div className="promotion__item">
              <img src={promotion8} alt={promotion8} className="promotion__image" />
              <div className="promotion__overlay">
                <h4 className="promotion__name">Xem Phim Hay – Nhận Lì Xì Chất</h4>
                <p className="promotion__description">
                  Trạm Dừng Chân Điện Ảnh G2 Cinema dành tặng lì xì may mắn cho các Stars khi mua 02
                  vé xem phim, tận hưởng không khí xuân rộn ràng và thưởng thức loạt siêu phẩm mùa
                  Tết đang được mong chờ nhất.
                </p>
                <NavLink
                  to="/tin-tuc/khuyen-mai/xem-phim-hay-nhan-li-xi-chat"
                  className="promotion__more"
                >
                  Chi Tiết
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Promotion;
