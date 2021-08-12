import cmt41 from 'assets/images/comment-film-4.1.jpg';
import cmt4 from 'assets/images/comment-film-4.jpg';
import news2 from 'assets/images/news-450-crood.jpg';
import news1 from 'assets/images/news-450-diet-quy.jpg';
import news4 from 'assets/images/news-450-trai-tim.jpg';
import news3 from 'assets/images/news-tiectrangmau450x300.jpg';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Loading from 'components/Loading';
import ScrollToTop from 'components/ScrollToTop';
import { useShowLoading } from 'hooks/customHook';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import MovieVertical from '../../MoviesVertical';

Comment4.propTypes = {
  loading: PropTypes.bool,
};
function Comment4(props) {
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

                  <span className="detail-news__home detail-news__home--active">
                    Bình luận phim
                  </span>
                </div>
                <div className="detail-news__content">
                  <h2 className="detail-news__title">
                    {' '}
                    [Review] Trái Tim Quái Vật: Khi Ác Quỷ Là Kẻ Lương Thiện Bị Tổn Thương
                  </h2>
                  <div className="detail-news__main">
                    <p className="detail-news__text">
                      Lấy đề tài trinh thám – kinh dị, <b>Trái Tim Quái Vật</b> chinh phục khán giả
                      bởi kịch bản thông minh cùng màn thể hiện ấn tượng của dàn diễn viên.
                    </p>
                    <p className="detail-news__text">
                      <b>Trái Tim Quái Vật</b> đặt ra câu hỏi: Liệu ác quỷ vốn được sinh ra với bản
                      chất đã định sẵn, hay trước đó bản chất thật sự của nó đã từng là một thiên
                      thần?
                    </p>
                    <p className="detail-news__text">
                      Trong các phim ngắn trước đây, đạo diễn Tạ Nguyên Hiệp đã cho thấy điểm mạnh
                      trong khâu sáng tạo cốt truyện, phối hợp các góc máy đậm tính điện ảnh và vô
                      cùng chân thực. Ở dự án phim chiếu rạp đầu tay, một lần nữa các khung hình đẹp
                      và độc đáo tiếp tục được anh phát huy tối đa. Vị đạo diễn đã dẫn dắt người xem
                      bước vào không khí rùng rợn hoàn hảo của một câu chuyện tâm lý-hình sự-giết
                      người.
                    </p>
                    <p className="detail-news__text">
                      Chủ đề tuy không hoàn toàn mới lạ, nhưng Tạ Nguyên Hiệp vẫn biết cách giữ vững
                      tiết tấu để thu hút và khiến cả rạp vỡ òa khi cú twist được hé lộ.
                    </p>
                    <p className="detail-news__text">
                      Khánh (Hoàng Thùy Linh) cùng với Lâm (B Trần) bắt buộc phải chạy trốn khỏi một
                      chung cư cũ sau khi cô bị tình nghi là kẻ giết người. Nạn nhân là Thịnh (Kay
                      Trần), ngoài ra vẫn còn đó hai kẻ đáng ngờ là ông Bé (Hứa Vĩ Văn) – cha của
                      Thịnh và Dustin (Trịnh Thăng Bình).
                    </p>
                    <p className="detail-news__block-image">
                      <img src={cmt4} alt={cmt4} width="600px" height="350px"></img>
                    </p>
                    <p className="detail-news__text">
                      Xuyên suốt phim là hành trình trốn chạy khỏi sự truy nã của cảnh sát, đồng
                      thời Lâm và Khánh cũng kiên trì điều tra xem liệu hung thủ thật sự là người
                      nào. Bối cảnh Sài Gòn hiện lên thông qua khu các hẻm chợ, dãy nhà bình dân,
                      các khu căn hộ cao cấp và những vùng ngoại ô vắng vẻ. Địa điểm xảy ra án mạng
                      chính là tòa chung cư cũ đã xuống cấp, cũng là nơi được miêu tả kỹ nhất. Gần
                      như rất dễ để cảm nhận nét bí ẩn, sự đáng sợ bao trùm lên cả nơi đây, đấy là
                      chỗ hiện diện của “ác quỷ”.
                    </p>
                    <p className="detail-news__text">
                      Điểm sáng tiếp theo của tác phẩm chính là ở cách triển khai tâm lý nhân vật.
                      Tâm lý tội phạm trong phim không hề được nhắc đến chỉ bằng vài câu thoại vô
                      thưởng vô phạt, sự tổn thương trong quá khứ chính là nguyên nhân dẫn dắt đến
                      hành động “máu lạnh” của kẻ giết người. Căn bệnh tâm lý đặc biệt cũng là nguồn
                      cơn khởi đầu cho sự tang thương trải dài cả một cuộc đời của hung thủ.
                    </p>
                    <p className="detail-news__text">
                      Trong vai Khánh, Hoàng Thùy Linh thể hiện tuýp nhân vật có số phận đáng thương
                      hơn đáng trách. Về mặt nội tâm, cách mà cô diễn tả hình ảnh một người mẹ đơn
                      thân, thương yêu con của mình hết mực, luôn vững vàng trước mọi thử thách và
                      khó khăn của cuộc đời, chỉ dừng ở mức tròn vai. Vẫn còn những hạn chế ở đài từ
                      và biểu cảm chưa bộc lộ trọn vẹn.
                    </p>
                    <p className="detail-news__text">
                      “Soái ca” Hứa Vĩ Văn có màn “lột xác” đáng khen trong vai ông Bé, một lão tổ
                      trưởng khu phố cáo già mưu mô, đầy thủ đoạn. Tạo hình chiếc bụng phệ cùng hàm
                      râu gian xảo và dáng đi méo mó khiến cho mỗi cảnh phim khi nhân vật này xuất
                      hiện, đều tràn ngập sự căng thẳng tột độ.
                    </p>
                    <p className="detail-news__text">
                      Nam ca sĩ Trịnh Thăng Bình đảm nhận vai Dustin – một ngôi sao hết thời. Thoạt
                      nhìn cứ ngỡ đâu đây chỉ là một nhân vật phụ nhạt nhòa, thế nhưng mỗi hành vi
                      của Dustin đều có chủ đích. Đây cũng là nhân tố quan trọng góp phần đẩy mạch
                      phim lên cao trào.
                    </p>
                    <p className="detail-news__block-image">
                      <img src={cmt41} alt={cmt41} width="600px" height="350px"></img>
                    </p>
                    <p className="detail-news__text">
                      Khánh bị tình nghi là thủ phạm trong một vụ án mạng kinh hoàng, người duy nhất
                      luôn ở bên cạnh và tin tưởng cô chính là Lâm. B Trần với gương mặt điển trai
                      sẵn có là lựa chọn đúng đắn nhất cho nhân vật Lâm “si tình”. Lâm thương thầm
                      Khánh từ rất lâu, ngay khi xảy ra chuyện anh đã không suy nghĩ nhiều, lập tức
                      dắt hai mẹ con cô bỏ trốn. Do đất diễn chiếm phần lớn thời lượng phim, thế nên
                      diễn biến tâm lý của Lâm cũng đem đến sự đồng cảm nhiều hơn, B Trần cùng Hoàng
                      Thùy Linh ghi điểm khi có màn hợp tác khá ăn ý.
                    </p>
                    <p className="detail-news__text">
                      Tuy nhiên yếu tố trinh thám trong phim vẫn còn tồn tại sự bất hợp lý. Hành
                      trình điều tra phá án của Lâm và Khánh vẫn còn quá đơn giản, mọi thứ còn mang
                      tính sắp đặt của đạo diễn, dẫn đến mục đích của các nhân vật đều đạt được dễ
                      dàng. Điều này khiến cho nhiều phân đoạn trong phim nghiêng về hướng tình cảm,
                      trở thành câu chuyện tình yêu khiên cưỡng, còn vụ án mạng lại biến thành câu
                      chuyện phụ, làm nền một cách mờ nhạt. Có thể đối với những ai khó tính, việc
                      các tình huống hài hước không đúng chỗ hoặc sướt mướt chưa đúng lúc sẽ khiến
                      cho mạch cảm xúc khi thưởng thức phim bị đứt đoạn.
                    </p>
                    <p className="detail-news__text">
                      Bên cạnh đó, tông màu của phim cũng gây khó hiểu khi liên tục thay đổi, lúc
                      mang sắc xám nhạt, sau đấy lại chuyển sang nhuộm ánh vàng một cách cường điệu.
                    </p>
                    <p className="detail-news__text">
                      Có thể thấy rằng, dù tồn tại nhiều điểm bất cập trong khâu triển khai kịch
                      bản, nhưng không thể phủ nhận rằng đây sẽ là thể loại tiềm năng sắp tới đối
                      với các nhà làm phim. Một tín hiệu vui đối với điện ảnh nước nhà,{' '}
                      <i>Trái Tim Quái Vật</i> đại diện ở vai trò là tiên phong, vừa đảm bảo tính
                      thương mại, hấp dẫn đại chúng, nhưng vẫn đem đến giá trị nghệ thuật đáng ghi
                      nhận.
                    </p>
                    <p className="detail-news__text">
                      <b>Trái Tim Quái Vật</b> đã ra mắt tại các rạp chiếu phim từ ngày 20.11.2020.
                    </p>
                  </div>
                </div>
                <div className="detail-news__related">
                  <h3 className="detail-news__subject">Bài viết liên quan</h3>
                  <NavLink to="/tin-tuc/binh-luan-phim/preview-demon-slayer-diet-gon-khuong-tu-nha-tren-bang-doanh-thu-phong-ve-toan-cau">
                    <p className="detail-news__post">
                      <i className="fa fa-angle-double-right"></i> [Review] Demon Slayer: "Diệt Gọn"
                      Khương Tử Nha Trên Bảng Doanh Thu Phòng Vé Toàn Cầu
                    </p>
                  </NavLink>
                  <NavLink to="/tin-tuc/binh-luan-phim/review-gia-dinh-croods-ky-nguyen-moi-vui-nhon-nhung-sau-sac-va-nu-quyen-khong-he-suong">
                    <p className="detail-news__post">
                      <i className="fa fa-angle-double-right"></i> [Review] Gia Đình Croods: Kỷ
                      Nguyên Mới – Vui Nhộn Nhưng Sâu Sắc Và Nữ Quyền Không Hề “Sượng”
                    </p>
                  </NavLink>
                  <NavLink to="/tin-tuc/binh-luan-phim/review-tiec-trang-mau-hoi-tu-anh-tai">
                    <p className="detail-news__post">
                      <i className="fa fa-angle-double-right"></i> [Review] Tiệc Trăng Máu: Hội Tụ
                      Anh Tài
                    </p>
                  </NavLink>
                  <NavLink to="/tin-tuc/binh-luan-phim/review-trai-tim-quai-vat-khi-ac-quy-la-ke-luong-thien-bi-ton-thuong">
                    <p className="detail-news__post">
                      <i className="fa fa-angle-double-right"></i> [Review] Trái Tim Quái Vật: Khi
                      Ác Quỷ Là Kẻ Lương Thiện Bị Tổn Thương
                    </p>
                  </NavLink>
                </div>
                <div className="detail-news__more">
                  <h3 className="detail-news__subject">Bình luận phim</h3>
                  <div className="detail-news__list-more">
                    <div className="detail-news__item">
                      <img src={news1} alt={news1} className="detail-news__image"></img>
                      <div className="detail-news__overlay">
                        <NavLink to="/tin-tuc/binh-luan-phim/preview-demon-slayer-diet-gon-khuong-tu-nha-tren-bang-doanh-thu-phong-ve-toan-cau">
                          <h3 className="detail-news__overlay-text">
                            [Review] Demon Slayer: "Diệt Gọn" Khương Tử Nha Trên Bảng Doanh Thu
                            Phòng Vé Toàn Cầu
                          </h3>
                        </NavLink>

                        <NavLink
                          to="/tin-tuc/binh-luan-phim/preview-demon-slayer-diet-gon-khuong-tu-nha-tren-bang-doanh-thu-phong-ve-toan-cau"
                          className="detail-news__overlay-button"
                        >
                          Chi Tiết
                        </NavLink>
                      </div>
                    </div>
                    <div className="detail-news__item">
                      <img src={news2} alt={news2} className="detail-news__image"></img>
                      <div className="detail-news__overlay">
                        <NavLink to="/tin-tuc/binh-luan-phim/review-gia-dinh-croods-ky-nguyen-moi-vui-nhon-nhung-sau-sac-va-nu-quyen-khong-he-suong">
                          <h3 className="detail-news__overlay-text">
                            [Review] Gia Đình Croods: Kỷ Nguyên Mới – Vui Nhộn Nhưng Sâu Sắc Và Nữ
                            Quyền Không Hề “Sượng”
                          </h3>
                        </NavLink>

                        <NavLink
                          to="/tin-tuc/binh-luan-phim/review-gia-dinh-croods-ky-nguyen-moi-vui-nhon-nhung-sau-sac-va-nu-quyen-khong-he-suong"
                          className="detail-news__overlay-button"
                        >
                          Chi Tiết
                        </NavLink>
                      </div>
                    </div>
                    <div className="detail-news__item">
                      <img src={news3} alt={news3} className="detail-news__image"></img>
                      <div className="detail-news__overlay">
                        <NavLink to="/tin-tuc/binh-luan-phim/review-tiec-trang-mau-hoi-tu-anh-tai">
                          <h3 className="detail-news__overlay-text">
                            [Review] Tiệc Trăng Máu: Hội Tụ Anh Tài
                          </h3>
                        </NavLink>

                        <NavLink
                          to="/tin-tuc/binh-luan-phim/review-tiec-trang-mau-hoi-tu-anh-tai"
                          className="detail-news__overlay-button"
                        >
                          Chi Tiết
                        </NavLink>
                      </div>
                    </div>
                    <div className="detail-news__item">
                      <img src={news4} alt={news4} className="detail-news__image"></img>
                      <div className="detail-news__overlay">
                        <NavLink to="/tin-tuc/binh-luan-phim/review-trai-tim-quai-vat-khi-ac-quy-la-ke-luong-thien-bi-ton-thuong">
                          <h3 className="detail-news__overlay-text">
                            [Review] Trái Tim Quái Vật: Khi Ác Quỷ Là Kẻ Lương Thiện Bị Tổn Thương
                          </h3>
                        </NavLink>

                        <NavLink
                          to="/tin-tuc/binh-luan-phim/review-trai-tim-quai-vat-khi-ac-quy-la-ke-luong-thien-bi-ton-thuong"
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
                <MovieVertical start={30} end={34}></MovieVertical>
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

export default Comment4;
