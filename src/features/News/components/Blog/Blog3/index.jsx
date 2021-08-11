import blg31 from 'assets/images/blog-film-3-1.jpg';
import blg32 from 'assets/images/blog-film-3-2.jpg';
import blg33 from 'assets/images/blog-film-3-3.jpg';
import blg3 from 'assets/images/blog-film-3.jpg';
import news8 from 'assets/images/news-450-bay-cuu.jpg';
import news7 from 'assets/images/news-450-dead-pool.png';
import news5 from 'assets/images/news-450-doanh-thu.png';
import news6 from 'assets/images/news-450-pixal.png';
import Loading from 'components/Loading';
import { useShowLoading } from 'hooks/customHook';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import MovieVertical from '../../MoviesVertical';

Blog3.propTypes = {
  loading: PropTypes.bool,
};

function Blog3(props) {
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

                <span className="detail-news__home detail-news__home--active">Góc điện ảnh</span>
              </div>
              <div className="detail-news__content">
                <h2 className="detail-news__title">
                  {' '}
                  Black Panther 2 Khởi Quay Vào Mùa Hè 2021, Marvel Làm Deadpool 3 Với Ryan Reynolds
                </h2>
                <div className="detail-news__main">
                  <p className="detail-news__text">
                    <i>
                      Như thường lệ, vào mỗi cuối tuần, hàng loạt tin tức mới xoay quanh các dự án
                      của vũ trụ điện ảnh Marvel lại được đăng tải. Tất nhiên, chúng lại tiếp tục
                      khiến “dân tình” phải đứng ngồi không yên vì quá háo hức, mong chờ…
                    </i>
                  </p>
                  <p className="detail-news__text">
                    Mới đây, The Hollywood Reporter đã tiết lộ Marvel Studios đang lên kế hoạch sản
                    xuất Black Panther 2 vào tháng 7.2021.
                  </p>
                  <p className="detail-news__block-image">
                    <img src={blg3} alt={blg3} width="600px" height="350px"></img>
                  </p>
                  <p className="detail-news__text">
                    Trang tin này cũng cho biết thêm ngôi sao người Mexico - Tenoch Huerta sẽ đảm
                    nhiệm vai phản diện chính trong phần phim mới này. Tenoch Huerta từng để lại dấu
                    ấn trong một số dự án phim ảnh như Here on Earth, Son of Monarchs và đặc biệt là
                    Narcos: Mexico.
                  </p>

                  <p className="detail-news__text">
                    Trong khi đó, nhân vật Shuri – em gái của T’Challa do nữ diễn viên Letitia
                    Wright thể hiện được dự báo là sẽ có vai trò nổi bật, quan trọng hơn. Tuy nhiên
                    điều này cũng chưa hoàn toàn đồng nghĩa với việc Marvel sẽ đưa Shuri sẽ trở
                    thành Black Panther tiếp theo sau sự ra đi của Chadwick Boseman.
                  </p>
                  <p className="detail-news__text">
                    Qua một bài phỏng vấn gần đây, Phó Giám đốc điều hành của Marvel - Victoria
                    Alonso – đã thẳng thắn nói “KHÔNG” khi được hỏi về tin đồn rằng họ sẽ sử dụng
                    CGI để thay thế cho Chadwick Boseman trong Black Panther 2. Như vậy rõ ràng
                    Disney và Marvel đang lên một một kế hoạch để làm thế nào tiếp tục phát triển
                    thương hiệu phim mà vẫn thể hiện được sự tôn trọng, tri ân với Chadwick Boseman.
                  </p>
                  <p className="detail-news__text">
                    Black Panther 2 dự kiến sẽ ra mắt tại các rạp chiếu phim vào tháng 5.2022.
                  </p>
                  <p className="detail-news__block-image">
                    <img src={blg31} alt={blg31} width="600px" height="350px"></img>
                  </p>
                  <p className="detail-news__text">
                    Một tin tức khác liên quan đến MCU cũng “nóng hổi” không kém đó chính là theo
                    Deaddetail-news đăng tải, Marvel đang hợp tác cùng hai chị em Wendy Molyneux và
                    Lizzie Molyneux để viết kịch bản Deadpool 3. Bộ đôi này đã được đề cử giải Emmy
                    trong tám năm liên tiếp và họ đã giành được chiến thắng vào năm 2017. Sự xuất
                    hiện của Wendy Molyneux và Lizzie Molyneux (biên kịch của Bob's Burgers – một bộ
                    phim hoạt hình sitcom của Mỹ) được cho là sẽ góp phần tăng thêm tính hài hước
                    của bộ phim.
                  </p>
                  <p className="detail-news__text">
                    Tất nhiên, vai chính của phim vẫn do ngôi sao Ryan Reynolds tiếp tục đảm nhiệm.
                    Không chỉ vậy, trang tin Deaddetail-news còn cho biết ở phần 3 này, Ryan Renolds
                    sẽ tham gia nhiều và sâu hơn vào quá trình sản xuất của dự án. Về vị trí đạo
                    diễn, vì lịch trình của David Leich (đạo diễn Deadpool 2) đã kín cho đến năm
                    2021 nên Marvel buộc phải tìm kiếm một cái tên khác để gửi gắm niềm tin.
                  </p>
                  <p className="detail-news__text">
                    Về nội dung, hẳn các khán giả vẫn còn nhớ ở đoạn kết của phần phim trước, với sự
                    giúp đỡ của máy du hành, Deadpool đã có thể nhảy vào bất kỳ dòng thời gian nào
                    mà anh ấy muốn. Có lẽ đây sẽ chính là cầu nối để MCU đưa anh chàng “bất trị” này
                    gia nhập đội ngũ của các Avengers. Sẽ ra sao nếu vào một ngày đẹp trời, Deadpool
                    và Doctor Strange vô tình gặp nhau khi đang chu du khắp các thực tại nhỉ?
                  </p>
                  <p className="detail-news__text">
                    Dù thế nào đi nữa, việc Deadpool được sản xuất bởi đội ngũ sáng tạo của Marvel
                    Studios chắc chắn sẽ tạo nên những chuyến phiêu lưu mới không kém phần thú vị và
                    hấp dẫn.
                  </p>
                  <p className="detail-news__block-image">
                    <img src={blg33} alt={blg33} width="600px" height="350px"></img>
                  </p>
                  <p className="detail-news__text">
                    Một tin tức khác liên quan đến phim mới Thor: Love And Thunder. Theo The
                    Hollywood Reporter đưa tin, Thor 4 sẽ có dàn diễn viên đông đảo, đa dạng, phong
                    phú đến mức có thể ví phần phim này như Avengers 5.
                  </p>

                  <p className="detail-news__text">
                    Trước đó, nhân vật Star-Lord do Chris Pratt thể hiện đã được xác nhận là sẽ góp
                    mặt trong Thor: Love And Thunder. Trong khi đấy, vai diễn của ngôi sao Chris
                    Blae vẫn hoàn toàn được giấu kín.
                  </p>
                  <p className="detail-news__text">
                    Thor: Love And Thunder dự kiến ​​khởi quay vào tháng 1.2021 và dự kiến ​​phát
                    hành vào ngày 11.2.2022.
                  </p>
                  <p className="detail-news__block-image">
                    <img src={blg32} alt={blg32} width="600px" height="350px"></img>
                  </p>
                  <p className="detail-news__text">
                    Cuối cùng, The Hollywood Reporter cho biết Guardians of the Galaxy Vol. 3 sẽ bắt
                    đầu sản xuất vào cuối năm 2021 dưới sự chỉ đạo của đạo diễn James Gunn.
                  </p>
                  <p className="detail-news__text">
                    Ban đầu, dự án này được dự định sẽ phát hành tại rạp chiếu phim vào năm 2020.
                    Tuy nhiên, những rắc rối trong quá khứ đã khiến James Gunn bị sa thải dù cho
                    kịch bản của Guardians of the Galaxy Vol. 3 đã hoàn tất. Sau đấy, chính Disney
                    lại mời vị đạo diễn này quay trở lại và tiếp tục cầm trịch dự án. Thế nhưng lúc
                    bấy giờ, James Gunn đang tham gia vào tác phẩm The Suicide Squad của DC nên chỉ
                    sau khi hoàn tất hợp đồng với Warner Bros., anh mới có thể quay trở lại tiếp tục
                    thực hiện Vệ Binh Dải Ngân Hà 3.
                  </p>
                  <p className="detail-news__text">
                    Có thông tin cho rằng, Guardians of the Galaxy Vol. 3 sẽ được “xuất kho” vào năm
                    2023.
                  </p>
                </div>
              </div>
              <div className="detail-news__related">
                <h3 className="detail-news__subject">Bài viết liên quan</h3>
                <NavLink to="/tin-tuc/goc-dien-anh/nhung-cai-ten-bao-chung-doanh-thu-phong-ve-tai-viet-nam">
                  <p className="detail-news__post">
                    <i className="fa fa-angle-double-right"></i>
                    Những Cái Tên Bảo Chứng Doanh Thu Phòng Vé Tại Việt Nam
                  </p>
                </NavLink>
                <NavLink to="/tin-tuc/goc-dien-anh/pixar-ngoai-le-duy-nhat-cua-hollywood-p2">
                  <p className="detail-news__post">
                    <i className="fa fa-angle-double-right"></i>
                    Pixar – Ngoại Lệ Duy Nhất Của Hollywood (P.2)
                  </p>
                </NavLink>
                <NavLink to="/tin-tuc/goc-dien-anh/black-panther-2-khoi-quay-vao-mua-he-2021-marvel-lam-deadpool-3-voi-ryan-reynolds">
                  <p className="detail-news__post">
                    <i className="fa fa-angle-double-right"></i>
                    Black Panther 2 Khởi Quay Vào Mùa Hè 2021, Marvel Làm Deadpool 3 Với Ryan
                    Reynolds
                  </p>
                </NavLink>
                <NavLink to="/tin-tuc/goc-dien-anh/phim-kinh-dien-su-im-lang-cua-bay-cuu-tieng-thet-dam-mau-va-ga-bac-si-benh-hoan">
                  <p className="detail-news__post">
                    <i className="fa fa-angle-double-right"></i>
                    Phim Kinh Điển: Sự Im Lặng Của Bầy Cừu – Tiếng Thét Đẫm Máu Và Gã Bác Sĩ Bệnh
                    Hoạn
                  </p>
                </NavLink>
              </div>
              <div className="detail-news__more">
                <h3 className="detail-news__subject">Bình luận phim</h3>
                <div className="detail-news__list-more">
                  <div className="detail-news__item">
                    <img src={news5} alt={news5} className="detail-news__image"></img>
                    <div className="detail-news__overlay">
                      <NavLink to="/tin-tuc/goc-dien-anh/nhung-cai-ten-bao-chung-doanh-thu-phong-ve-tai-viet-nam">
                        <h3 className="detail-news__overlay-text">
                          Những Cái Tên Bảo Chứng Doanh Thu Phòng Vé Tại Việt Nam
                        </h3>
                      </NavLink>

                      <NavLink
                        to="/tin-tuc/goc-dien-anh/nhung-cai-ten-bao-chung-doanh-thu-phong-ve-tai-viet-nam"
                        className="detail-news__overlay-button"
                      >
                        Chi Tiết
                      </NavLink>
                    </div>
                  </div>
                  <div className="detail-news__item">
                    <img src={news6} alt={news6} className="detail-news__image"></img>
                    <div className="detail-news__overlay">
                      <NavLink to="/tin-tuc/goc-dien-anh/pixar-ngoai-le-duy-nhat-cua-hollywood-p2">
                        <h3 className="detail-news__overlay-text">
                          Pixar – Ngoại Lệ Duy Nhất Của Hollywood (P.2)
                        </h3>
                      </NavLink>

                      <NavLink
                        to="/tin-tuc/goc-dien-anh/pixar-ngoai-le-duy-nhat-cua-hollywood-p2"
                        className="detail-news__overlay-button"
                      >
                        Chi Tiết
                      </NavLink>
                    </div>
                  </div>
                  <div className="detail-news__item">
                    <img src={news7} alt={news7} className="detail-news__image"></img>
                    <div className="detail-news__overlay">
                      <NavLink to="/tin-tuc/goc-dien-anh/black-panther-2-khoi-quay-vao-mua-he-2021-marvel-lam-deadpool-3-voi-ryan-reynolds">
                        <h3 className="detail-news__overlay-text">
                          Black Panther 2 Khởi Quay Vào Mùa Hè 2021, Marvel Làm Deadpool 3 Với Ryan
                          Reynolds
                        </h3>
                      </NavLink>

                      <NavLink
                        to="/tin-tuc/goc-dien-anh/black-panther-2-khoi-quay-vao-mua-he-2021-marvel-lam-deadpool-3-voi-ryan-reynolds"
                        className="detail-news__overlay-button"
                      >
                        Chi Tiết
                      </NavLink>
                    </div>
                  </div>
                  <div className="detail-news__item">
                    <img src={news8} alt={news8} className="detail-news__image"></img>
                    <div className="detail-news__overlay">
                      <NavLink to="/tin-tuc/goc-dien-anh/phim-kinh-dien-su-im-lang-cua-bay-cuu-tieng-thet-dam-mau-va-ga-bac-si-benh-hoan">
                        <h3 className="detail-news__overlay-text">
                          Phim Kinh Điển: Sự Im Lặng Của Bầy Cừu – Tiếng Thét Đẫm Máu Và Gã Bác Sĩ
                          Bệnh Hoạn
                        </h3>
                      </NavLink>

                      <NavLink
                        to="/tin-tuc/goc-dien-anh/phim-kinh-dien-su-im-lang-cua-bay-cuu-tieng-thet-dam-mau-va-ga-bac-si-benh-hoan"
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
              <MovieVertical start={44} end={48}></MovieVertical>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Blog3;
