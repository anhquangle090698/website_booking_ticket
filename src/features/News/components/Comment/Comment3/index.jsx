import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import cmt3 from 'assets/images/comment-film-3.jpeg';
import cmt31 from 'assets/images/comment-film-3.1.jpg';
import news1 from 'assets/images/news-450-diet-quy.jpg';
import news2 from 'assets/images/news-450-crood.jpg';
import news3 from 'assets/images/news-tiectrangmau450x300.jpg';
import news4 from 'assets/images/news-450-trai-tim.jpg';
import MovieVertical from '../../MoviesVertical';

function Comment3(props) {
  return (
    <div className="detail-news">
      <div className="row">
        <div className="col-12 col-lg-8">
          <div className="detail-news__breadcrumb">
            <NavLink to="/">
              <span className="detail-news__home">Trang chủ</span>
            </NavLink>
            <i class="fa fa-angle-right detail-news__breadcrumb-icon"></i>

            <span className="detail-news__home detail-news__home--active">Bình luận phim</span>
          </div>
          <div className="detail-news__content">
            <h2 className="detail-news__title">[Review] Tiệc Trăng Máu: Hội Tụ Anh Tài</h2>
            <div className="detail-news__main">
              <p className="detail-news__text">
                Sau bao ngày chờ đợi, cuối cùng thì Tiệc Trăng Máu đã chính thức ra rạp. Cùng xem
                liệu bộ phim này có xứng đáng với kỳ vọng của khán giả không nhé.
              </p>
              <p className="detail-news__text">
                Như vậy là nối tiếp Ròm, phim chiếu rạp <b>Tiệc Trăng Máu</b> đã chính thức đổ bộ
                các phòng vé Việt.
              </p>
              <p className="detail-news__block-image">
                <img src={cmt3} alt={cmt3} width="600px" height="350px"></img>
              </p>
              <p className="detail-news__text">
                Như chúng ta đã biết, <b>Tiệc Trăng Máu</b> được chuyển thể từ phim hay Intimate
                Strangers (Người Quen Xa Lạ) của Hàn Quốc. Vốn dĩ đây cũng là một dự án remake từ bộ
                phim Perfect Strangers của Ý.
              </p>
              <p className="detail-news__text">
                Trước khi đi vào bình luận chính thức, xin phép được nhắc lại rằng tính đến
                15.7.2019, Perfect Strangers xác lập kỷ lục Guinness thế giới – Trở thành phim được
                làm lại nhiều nhất trong lịch sử điện ảnh với 18 phiên bản trên toàn cầu. Riêng với
                bản Hàn, Intimate Strangers dù “sinh sau đẻ muộn” 2 năm nhưng vẫn tiếp tục gây sốt
                phòng vé. Bằng chứng là phim đã được 44 quốc gia và vùng lãnh thổ mua lại bản quyền
                công chiếu cùng nhiều thành tích doanh thu ấn tượng khác ở thị trường nội địa: xếp
                thứ hai (Along with the Gods: The Last 49 Days) trong danh sách những phim có doanh
                thu trong tuần mở màn cao nhất năm 2018, xếp thứ ba trong nhóm những phim vượt qua 2
                triệu lượt xem nhanh nhất năm 2018,…
              </p>
              <p className="detail-news__text">
                Với những dữ liệu trên thì có thể chắc chắn một điều rằng nội dung – kịch bản của
                Tiệc Trăng Máu sẽ không thể nào khiến người xem có thể thất vọng. Tất nhiên, phiên
                bản Việt thì vẫn sẽ có những tình tiết được sửa đổi để phù hợp, gần gũi, chân thật
                hơn với con người và văn hóa Việt Nam. Đây cũng chính là một điểm mà ekip làm phim
                đã xử lý khá tốt và khéo léo.
              </p>
              <p className="detail-news__text">
                Sau kịch bản, yếu tố thứ hai quyết định đến thành công của Perfect Strangers,
                Intimate Strangers và giờ đây cả <b>Tiệc Trăng Máu</b> chính là khả năng diễn xuất
                của dàn diễn viên.
              </p>
              <p className="detail-news__text">
                Còn nhớ, ngay từ khi công bố dự án, Tiệc Trăng Máu đã thu hút sự chú ý rất lớn từ
                giới truyền thông và dư luận bởi sự tham gia của những cái tên có “trọng lượng”
                không hề nhỏ trong giới điện ảnh Việt. Hồng Ánh, Thái Hòa, Đức Thịnh, Thu Trang, Hức
                Vĩ Văn, Kiều Minh Tuấn hay thậm chí là người trẻ tuổi nhất Kaity Nguyễn – đều đã
                chứng minh được tài năng cũng như sở hữu những bộ phim có xếp hạng doanh thu cao của
                thị trường điện ảnh Việt.
              </p>
              <p className="detail-news__block-image">
                <img src={cmt31} alt={cmt31} width="600px" height="350px"></img>
              </p>
              <p className="detail-news__text">
                Vậy đến với Tiệc Trăng Máu, họ đã thể hiện ra sao đây?
              </p>
              <p className="detail-news__text">
                Chúng ta đã quá quen thuộc với một Thu Trang hài hước, dí dỏm rồi phải không nào?
                Trong bộ phim hay này cô ấy vẫn sẽ như vậy… nhưng đó chưa phải là tất cả đâu nhé.
                Không chỉ thể hiện rất mượt “sự hài hước đậm chất vô duyên” của nhân vật, “Chị Mười
                Ba” còn thực sự bùng nổ ở cuối phim. Cũng chính vì thế mà không sai khi nói rằng,
                màn hóa thân của Thu Trang sẽ để lại ấn tượng nhiều nhất trong lòng khán giả.
              </p>
              <p className="detail-news__text">
                Nam diễn viên điển trai Hứa Vĩ Văn cũng có một màn tái xuất màn ảnh rộng ấn tượng
                không kém dù nhân vật mà anh đảm nhiệm không quá khác so với những hình tượng trước
                đây: vẫn điển trai phong độ, vẫn nhã nhặn điềm đạm, vẫn ôn nhu thấu hiểu… Thế nhưng
                có một câu nói rằng, đôi khi chỉ cần một khoảnh khắc thôi thì bạn cũng có thể tỏa
                sáng – và đó cũng chính là Hứa Vĩ Văn trong Tiệc Trăng Máu. Phân cảnh nam diễn viên
                đưa ra lời khuyên với con gái qua điện thoại chắc chắn sẽ khiến trái tim của nhiều
                khán giả xao xuyến rung động.
              </p>
              <p className="detail-news__text">
                Sau Em Chưa 18, Kiều Minh Tuấn và Kaity Nguyễn tiếp tục yêu nhau trong Tiệc Trăng
                Máu. Phải thừa nhận một điều rằng phản ứng hóa học giữa cặp đôi này quá tốt. Sự ăn ý
                quá đỗi ngọt ngào của họ thực sự đã “tràn” ra cả ngoài màn hình rộng. Tất nhiên, so
                với bộ phim học đường trước đây, cả Kiều Minh Tuấn và Kaity Nguyễn đều cho thấy được
                sự trưởng thành, dày dạn kinh nghiệm phù hợp với yêu cầu của những nhân vật mới.
              </p>
              <p className="detail-news__text">
                Còn với Hồng Ánh, Thái Hòa và Đức Thịnh, có lẽ không cần phải nói gì thêm nữa bởi
                với tài năng của họ, “nhiệm vụ” lần này không hề khó khăn một chút nào cả.
              </p>
              <p className="detail-news__text">
                Bên cạnh những điểm mạnh, dĩ nhiên Tiệc Trăng Máu vẫn còn tồn tại một số khuyết điểm
                đáng tiếc. Có thể kể đến như phần đầu phim vẫn đang còn lê thê; đáng chú ý với những
                ai đã từng xem Intimate Strangers của Hàn Quốc, chắc hẳn sẽ có chút tiếc nuối khi
                phần âm nhạc trong phiên bản Việt vẫn chưa được sử dụng thực sự hiệu quả…
              </p>
              <p className="detail-news__text">
                Trong thời điểm hàng loạt bom tấn quốc tế phải dời lịch chiếu liên tục vì diễn biến
                phức tạp của Covid, sự xuất hiện của những phim hay như Ròm và giờ là Tiệc Trăng Máu
                có thể nói rất quan trọng – không chỉ với các phòng chiếu mà còn với những người đam
                mê điện ảnh, muốn được trải nghiệm điện ảnh một cách chân chính.
              </p>
              <p className="detail-news__text">
                Đừng quên, <b>Tiệc Trăng Máu</b> chính thức khởi chiếu trên toàn quốc từ ngày
                23.10.2020.
              </p>
            </div>
          </div>
          <div className="detail-news__related">
            <h3 className="detail-news__subject">Bài viết liên quan</h3>
            <NavLink to="/tin-tuc/binh-luan-phim/preview-demon-slayer-diet-gon-khuong-tu-nha-tren-bang-doanh-thu-phong-ve-toan-cau">
              <p className="detail-news__post">
                <i class="fa fa-angle-double-right"></i> [Review] Demon Slayer: "Diệt Gọn" Khương Tử
                Nha Trên Bảng Doanh Thu Phòng Vé Toàn Cầu
              </p>
            </NavLink>
            <NavLink to="/tin-tuc/binh-luan-phim/review-gia-dinh-croods-ky-nguyen-moi-vui-nhon-nhung-sau-sac-va-nu-quyen-khong-he-suong">
              <p className="detail-news__post">
                <i class="fa fa-angle-double-right"></i> [Review] Gia Đình Croods: Kỷ Nguyên Mới –
                Vui Nhộn Nhưng Sâu Sắc Và Nữ Quyền Không Hề “Sượng”
              </p>
            </NavLink>
            <NavLink to="/tin-tuc/binh-luan-phim/review-tiec-trang-mau-hoi-tu-anh-tai">
              <p className="detail-news__post">
                <i class="fa fa-angle-double-right"></i> [Review] Tiệc Trăng Máu: Hội Tụ Anh Tài
              </p>
            </NavLink>
            <NavLink to="/tin-tuc/binh-luan-phim/review-trai-tim-quai-vat-khi-ac-quy-la-ke-luong-thien-bi-ton-thuong">
              <p className="detail-news__post">
                <i class="fa fa-angle-double-right"></i> [Review] Trái Tim Quái Vật: Khi Ác Quỷ Là
                Kẻ Lương Thiện Bị Tổn Thương
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
                      [Review] Demon Slayer: "Diệt Gọn" Khương Tử Nha Trên Bảng Doanh Thu Phòng Vé
                      Toàn Cầu
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
                      [Review] Gia Đình Croods: Kỷ Nguyên Mới – Vui Nhộn Nhưng Sâu Sắc Và Nữ Quyền
                      Không Hề “Sượng”
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
          <MovieVertical start={25} end={29}></MovieVertical>
        </div>
      </div>
    </div>
  );
}

Comment3.propTypes = {};

export default Comment3;
