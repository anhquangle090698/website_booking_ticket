import React from 'react';
import f1 from 'assets/images/footer-cgv.png';
import f2 from 'assets/images/footer-bhd.png';
import f3 from 'assets/images/footer-cinestar.png';
import f4 from 'assets/images/footer-galaxycine.png';
import f5 from 'assets/images/footer-megags.png';
import f6 from 'assets/images/footer-AGRIBANK.png';
import f7 from 'assets/images/footer-payoo.jpg';
import f8 from 'assets/images/footer-VCB.png';
import f9 from 'assets/images/footer-VIETTINBANK.png';
import f10 from 'assets/images/footer-zalopay_icon.png';
import f11 from 'assets/images/footer-informed.png';
import logoB from 'assets/images/logo-600x600_g2_bg_dark.png';

function Footer(props) {
  return (
    <>
      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-top">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="footer-content">
                <h3 className="footer-content__title">Giới Thiệu</h3>
                <div className="footer-content__list">
                  <div className="footer-content__item">
                    <i className="fa fa-angle-double-right footer-content__icon"></i>
                    <span className="footer-content__text">Về Chúng Tôi</span>
                  </div>
                  <div className="footer-content__item">
                    <i className="fa fa-angle-double-right footer-content__icon"></i>
                    <span className="footer-content__text">Thỏa Thuận Sử Dụng</span>
                  </div>
                  <div className="footer-content__item">
                    <i className="fa fa-angle-double-right footer-content__icon"></i>
                    <span className="footer-content__text">Quy Chế Hoạt Động</span>
                  </div>
                  <div className="footer-content__item">
                    <i className="fa fa-angle-double-right footer-content__icon"></i>
                    <span className="footer-content__text">Chính Sách Bảo Mật</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="footer-content">
                <h3 className="footer-content__title">Hỗ Trợ</h3>
                <div className="footer-content__list">
                  <div className="footer-content__item">
                    <i className="fa fa-angle-double-right footer-content__icon"></i>
                    <span className="footer-content__text">Góp Ý</span>
                  </div>
                  <div className="footer-content__item">
                    <i className="fa fa-angle-double-right footer-content__icon"></i>
                    <span className="footer-content__text">Sale & Services</span>
                  </div>
                  <div className="footer-content__item">
                    <i className="fa fa-angle-double-right footer-content__icon"></i>
                    <span className="footer-content__text">Rạp / Giá vé</span>
                  </div>
                  <div className="footer-content__item">
                    <i className="fa fa-angle-double-right footer-content__icon"></i>
                    <span className="footer-content__text">Tuyển Dụng</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="footer-content">
                <h3 className="footer-content__title">Liên Hệ</h3>
                <div className="footer-content__list">
                  <div className="footer-content__item">
                    <i className="fa fa-angle-double-right footer-content__icon"></i>
                    <span className="footer-content__text">www.g2cinema.com.vn</span>
                  </div>
                  <div className="footer-content__item">
                    <i className="fa fa-angle-double-right footer-content__icon"></i>
                    <span className="footer-content__text">Hotline: 1900 6996</span>
                  </div>
                  <div className="footer-content__item">
                    <i className="fa fa-angle-double-right footer-content__icon"></i>
                    <span className="footer-content__text">g2_cinema@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="footer-content">
                <h3 className="footer-content__title">Kết nối g2 cinema</h3>
                <div className="footer-content__social">
                  <a href="https://facebook.com" target="_blank" rel="noreferrer">
                    <i className="fab fa-facebook-square footer-content__icon footer-content__icon--social footer-content__icon--facebook"></i>
                  </a>

                  <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                    <i className="fab fa-youtube footer-content__icon footer-content__icon--social footer-content__icon--youtube"></i>
                  </a>

                  <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram footer-content__icon footer-content__icon--social footer-content__icon--instagram"></i>
                  </a>

                  <a href="https://twitter.com/?lang=vi" target="_blank" rel="noreferrer">
                    <i className="fab fa-twitter-square footer-content__icon footer-content__icon--social footer-content__icon--twitter"></i>
                  </a>
                </div>
                <h3 className="footer-content__title">Đối Tác</h3>
                <div className="footer-content__partner">
                  <img src={f1} alt={f1} className="footer-content__image"></img>
                  <img src={f2} alt={f2} className="footer-content__image"></img>
                  <img src={f3} alt={f3} className="footer-content__image"></img>
                  <img src={f4} alt={f4} className="footer-content__image"></img>
                  <img src={f5} alt={f5} className="footer-content__image"></img>
                  <img src={f6} alt={f6} className="footer-content__image"></img>
                  <img src={f7} alt={f7} className="footer-content__image"></img>
                  <img src={f8} alt={f8} className="footer-content__image"></img>
                  <img src={f9} alt={f9} className="footer-content__image"></img>
                  <img src={f10} alt={f10} className="footer-content__image"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-line"></div>
        <div className="footer-bottom">
          <img src={logoB} alt={logoB} className="footer-bottom__logo"></img>
          <span className="footer-bottom__address">
            Công ty cổ phần G2, Tầng 5, 112 Cao Thắng, Phường 4, Quận 3, TPHCM
          </span>
          <img src={f11} alt={f11} className="footer-bottom__permit"></img>
        </div>
      </footer>
    </>
  );
}

export default Footer;
