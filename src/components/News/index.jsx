import React from 'react';
//News image from asset images
import news1 from 'assets/images/news-450-diet-quy.jpg';
import news2 from 'assets/images/news-450-crood.jpg';
import news3 from 'assets/images/news-tiectrangmau450x300.jpg';
import news4 from 'assets/images/news-450-trai-tim.jpg';
import news5 from 'assets/images/news-450-doanh-thu.png';
import news6 from 'assets/images/news-450-pixal.png';
import news7 from 'assets/images/news-450-dead-pool.png';
import news8 from 'assets/images/news-450-bay-cuu.jpg';
import { NavLink } from 'react-router-dom';

function News(props) {
  return (
    <div className="news" id="tin-tuc" data-aos="fade-right">
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="news__title news__title--left movie-title">Bình Luận Phim</div>
          <div className="news__content">
            <div className="news__item">
              <NavLink to="/tin-tuc/binh-luan-phim/preview-demon-slayer-diet-gon-khuong-tu-nha-tren-bang-doanh-thu-phong-ve-toan-cau">
                <img src={news1} alt={news1} className="news__image" />
              </NavLink>

              <div className="news__block">
                <NavLink to="/tin-tuc/binh-luan-phim/preview-demon-slayer-diet-gon-khuong-tu-nha-tren-bang-doanh-thu-phong-ve-toan-cau">
                  <p className="news__topic">
                    [Review] Demon Slayer: "Diệt Gọn" Khương Tử Nha Trên Bảng Doanh Thu Phòng Vé
                    Toàn Cầu
                  </p>
                </NavLink>
                <p className="news__description">
                  Trong năm 2020, khi phòng vé vô cùng ảm đạm vì đại dịch Covid-19, phim điện ảnh
                  <strong> Demon Slayer: Kimetsu No Yaiba the Movie: Mugen Train </strong>
                  thắng lớn ở Nhật Bản với hơn 20 triệu lượt người xem, thu về xấp xỉ 265 triệu $.
                </p>
              </div>
            </div>
            <div className="news__item">
              <NavLink to="/tin-tuc/binh-luan-phim/review-gia-dinh-croods-ky-nguyen-moi-vui-nhon-nhung-sau-sac-va-nu-quyen-khong-he-suong">
                <img src={news2} alt={news2} className="news__image" />
              </NavLink>
              <div className="news__block">
                <NavLink to="/tin-tuc/binh-luan-phim/review-gia-dinh-croods-ky-nguyen-moi-vui-nhon-nhung-sau-sac-va-nu-quyen-khong-he-suong">
                  <p className="news__topic">
                    [Review] Gia Đình Croods: Kỷ Nguyên Mới – Vui Nhộn Nhưng Sâu Sắc Và Nữ Quyền
                    Không Hề “Sượng”
                  </p>
                </NavLink>
                <p className="news__description">
                  Tình huống hài hước, thông điệp nhân văn, đề cao nữ quyền…, nội dung của
                  <b>
                    {' '}
                    <i> Gia Đình Croods: Kỷ Nguyên Mới </i>{' '}
                  </b>
                  có thể tóm tắt bằng những yếu tố vừa được liệt kê.
                </p>
              </div>
            </div>
            <div className="news__item">
              <NavLink to="/tin-tuc/binh-luan-phim/review-tiec-trang-mau-hoi-tu-anh-tai">
                <img src={news3} alt={news3} className="news__image" />
              </NavLink>
              <div className="news__block">
                <NavLink to="/tin-tuc/binh-luan-phim/review-tiec-trang-mau-hoi-tu-anh-tai">
                  <p className="news__topic">[Review] Tiệc Trăng Máu: Hội Tụ Anh Tài</p>
                </NavLink>
                <p className="news__description">
                  Sau bao ngày chờ đợi, cuối cùng thì Tiệc Trăng Máu đã chính thức ra rạp. Cùng xem
                  liệu bộ phim này có xứng đáng với kỳ vọng của khán giả không nhé.
                </p>
              </div>
            </div>
            <div className="news__item">
              <NavLink to="/tin-tuc/binh-luan-phim/review-trai-tim-quai-vat-khi-ac-quy-la-ke-luong-thien-bi-ton-thuong">
                <img src={news4} alt={news4} className="news__image" />
              </NavLink>
              <div className="news__block">
                <NavLink to="/tin-tuc/binh-luan-phim/review-trai-tim-quai-vat-khi-ac-quy-la-ke-luong-thien-bi-ton-thuong">
                  <p className="news__topic">
                    [Review] Trái Tim Quái Vật: Khi Ác Quỷ Là Kẻ Lương Thiện Bị Tổn Thương
                  </p>
                </NavLink>
                <p className="news__description">
                  <b>
                    <i> Trái Tim Quái Vật </i>
                  </b>
                  đặt ra câu hỏi: Liệu ác quỷ vốn được sinh ra với bản chất đã định sẵn, hay trước
                  đó bản chất thật sự của nó đã từng là một thiên thần?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="news__title news__title--right movie-title">Góc Điện Ảnh</div>
          <div className="news__content">
            <div className="news__item">
              <NavLink to="/tin-tuc/goc-dien-anh/nhung-cai-ten-bao-chung-doanh-thu-phong-ve-tai-viet-nam">
                <img src={news5} alt={news5} className="news__image" />
              </NavLink>
              <div className="news__block">
                <NavLink to="/tin-tuc/goc-dien-anh/nhung-cai-ten-bao-chung-doanh-thu-phong-ve-tai-viet-nam">
                  <p className="news__topic">
                    {' '}
                    Những Cái Tên Bảo Chứng Doanh Thu Phòng Vé Tại Việt Nam
                  </p>
                </NavLink>
                <p className="news__description">
                  Tại Hollywood, Tom Cruise, Dwayne Johnson hay Leonardo DiCaprio được coi là những
                  ông hoàng phòng vé. Chỉ cần nhìn tên diễn viên, khán giả sẽ ùn ùn kéo ra rạp. Ở
                  Việt Nam, ngôi sao nào có khả năng bảo chứng doanh thu tương tự?
                </p>
              </div>
            </div>
            <div className="news__item">
              <NavLink to="/tin-tuc/goc-dien-anh/pixar-ngoai-le-duy-nhat-cua-hollywood-p2">
                <img src={news6} alt={news6} className="news__image" />
              </NavLink>
              <div className="news__block">
                <NavLink to="/tin-tuc/goc-dien-anh/pixar-ngoai-le-duy-nhat-cua-hollywood-p2">
                  <p className="news__topic"> Pixar – Ngoại Lệ Duy Nhất Của Hollywood (P.2)</p>
                </NavLink>
                <p className="news__description">
                  Không có ai đi xem một bộ phim vì nó được làm bởi Universal hay 20th Century Fox.
                  Tuy nhiên, Pixar là ngoại lệ. Mọi người đều biết Pixar.
                </p>
              </div>
            </div>
            <div className="news__item">
              <NavLink to="/tin-tuc/goc-dien-anh/black-panther-2-khoi-quay-vao-mua-he-2021-marvel-lam-deadpool-3-voi-ryan-reynolds">
                <img src={news7} alt={news7} className="news__image" />
              </NavLink>
              <div className="news__block">
                <NavLink to="/tin-tuc/goc-dien-anh/black-panther-2-khoi-quay-vao-mua-he-2021-marvel-lam-deadpool-3-voi-ryan-reynolds">
                  <p className="news__topic">
                    {' '}
                    Black Panther 2 Khởi Quay Vào Mùa Hè 2021, Marvel Làm Deadpool 3 Với Ryan
                    Reynolds
                  </p>
                </NavLink>
                <p className="news__description">
                  Như thường lệ, vào mỗi cuối tuần, hàng loạt tin tức mới xoay quanh các dự án của
                  vũ trụ điện ảnh Marvel lại được đăng tải. Tất nhiên, chúng lại tiếp tục khiến “dân
                  tình” phải đứng ngồi không yên vì quá háo hức, mong chờ…
                </p>
              </div>
            </div>
            <div className="news__item">
              <NavLink to="/tin-tuc/goc-dien-anh/phim-kinh-dien-su-im-lang-cua-bay-cuu-tieng-thet-dam-mau-va-ga-bac-si-benh-hoan">
                <img src={news8} alt={news8} className="news__image" />
              </NavLink>
              <div className="news__block">
                <NavLink to="/tin-tuc/goc-dien-anh/phim-kinh-dien-su-im-lang-cua-bay-cuu-tieng-thet-dam-mau-va-ga-bac-si-benh-hoan">
                  <p className="news__topic">
                    {' '}
                    Phim Kinh Điển: Sự Im Lặng Của Bầy Cừu – Tiếng Thét Đẫm Máu Và Gã Bác Sĩ Bệnh
                    Hoạn
                  </p>
                </NavLink>
                <p className="news__description">
                  <b>
                    <i> Sự Im Lặng Của Bầy Cừu </i>
                  </b>
                  là tuyệt phẩm đã chiến thắng “Big Five” tại Oscar năm 1992 với hầu hết các giải
                  thưởng quan trọng nhất. Đồng thời cũng là phim kinh dị duy nhất tính đến thời điểm
                  hiện tại được xướng tên ở hạng mục Phim Hay Nhất.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
