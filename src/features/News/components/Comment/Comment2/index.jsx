import cmt21 from 'assets/images/comment-film-2.1.jpg';
import cmt2 from 'assets/images/comment-film-2.jpg';
import news2 from 'assets/images/news-450-crood.jpg';
import news1 from 'assets/images/news-450-diet-quy.jpg';
import news4 from 'assets/images/news-450-trai-tim.jpg';
import news3 from 'assets/images/news-tiectrangmau450x300.jpg';
import Loading from 'components/Loading';
import { useShowLoading } from 'hooks/customHook';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import MovieVertical from '../../MoviesVertical';

Comment2.propTypes = {
  loading: PropTypes.bool,
};
function Comment2(props) {
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

                <span className="detail-news__home detail-news__home--active">Bình luận phim</span>
              </div>
              <div className="detail-news__content">
                <h2 className="detail-news__title">
                  [Review] Gia Đình Croods: Kỷ Nguyên Mới – Vui Nhộn Nhưng Sâu Sắc Và Nữ Quyền Không
                  Hề “Sượng”
                </h2>
                <div className="detail-news__main">
                  <p className="detail-news__text">
                    Tình huống hài hước, thông điệp nhân văn, đề cao nữ quyền…, nội dung của{' '}
                    <b>Gia Đình Croods: Kỷ Nguyên Mới</b> có thể tóm tắt bằng những yếu tố vừa được
                    liệt kê.
                  </p>
                  <p className="detail-news__text">
                    Đã bảy năm kể từ sau thành công rực rỡ của <i>The Croods</i> (2013), lần này nhà
                    Croods quay trở lại với chuyến phiêu lưu mới đầy hấp dẫn và không kém phần “lầy
                    lội”.
                  </p>
                  <p className="detail-news__text">
                    Những gì vốn từng ghi điểm với khán giả ở phần một đã tiếp tục phát huy tối đa
                    trong lần trở lại này. Vẫn là thế giới tiền sử đầy hoang sơ, nguy hiểm từ những
                    loài sinh vật lạ rình rập khắp nơi, thế nhưng toàn bộ thời lượng phim lại đem
                    đến các gam màu tươi sáng, rực rỡ.
                  </p>
                  <p className="detail-news__text">
                    Ở phần phim mới , ngoài gia đình Croods thân quen, người xem được biết đến một
                    gia đình có cái tên khá kiêu ngạo “Betterman” (gia đình Người Tốt Hơn). Các
                    thành viên của nhà Betterman gồm có cặp vợ chồng Hy – Vọng (Hope – Phil), cùng
                    cô con gái Bình Minh (Dawn). Họ từng là hàng xóm cũ của bố mẹ Guy, thế nên khi
                    cả hai gia đình chạm mặt đã dẫn đến nhiều sự việc dở khóc dở cười.
                  </p>
                  <p className="detail-news__text">
                    Trong khi nhà Croods đại diện cho những điều thuần khiết và hoang dại nhất, thì
                    phía hộ Betterman lại là những cá thể có phần “thượng đẳng” hơn. Họ tiến bộ
                    không chỉ ở lối tư duy, cốt cách con người, mà ngay cả căn nhà cũng được Phil
                    thiết kế như một khu nghỉ dưỡng 5 sao sang trọng. Đầy đủ tiện nghi, thân thiện
                    với môi trường, hiện đại bậc nhất thời kỳ đồ đá.
                  </p>
                  <p className="detail-news__text">
                    Hiển nhiên nghe qua cũng dễ dàng nhận ra được sự khác biệt giữa hai bên gia
                    đình, điều này dẫn đến mâu thuẫn để rồi từ đấy đặt ra hàng loạt thử thách để các
                    nhân vật chỉ còn cách đoàn kết với nhau giải quyết tất cả.
                  </p>
                  <p className="detail-news__block-image">
                    <img src={cmt2} alt={cmt2} width="600px" height="350px"></img>
                  </p>

                  <p className="detail-news__text">
                    Câu chuyện của <i>The Croods 2</i> mang hơi thở thời đại, lồng ghép nhiều ẩn dụ
                    nhằm phê phán chính những con người trong xã hội ngày nay. Cậu con trai Thunk
                    của nhà Croods lúc thì trở nên thụ động, chỉ biết đắm chìm vào cảnh quang thiên
                    nhiên thông qua ô cửa sổ lớn mà không chịu bước ra ngoài khám phá để có những
                    trải nghiệm tuyệt hơn. Khi thì cầm trên tay khung gỗ nhỏ, nhìn qua đấy và tự
                    tưởng tượng đấy như ô cửa sổ di động để cậu tiếp tục quan sát mọi thứ.
                  </p>

                  <p className="detail-news__text">
                    Cửa sổ rộng lớn hay khung gỗ nhỏ mang dáng dấp của chiếc TV và những chiếc điện
                    thoại thông minh, Ipad…. Trẻ nhỏ thời hiện đại dường như cũng đang quá lệ thuộc
                    vào các thiết bị điện tử, dần dần quên đi mất thế giới rộng lớn bên ngoài vẫn
                    còn nhiều điều đáng để học tập.
                  </p>
                  <p className="detail-news__text">
                    Đã là bố mẹ, ai cũng dành tình yêu thương vô bờ bến dành cho con mình. Thế nhưng
                    đôi khi chính sự bảo bọc quá mức ấy cũng chưa hẳn là tốt cho đứa trẻ. Tưởng như
                    cô bé Dawn sống trong một mái ấm hoàn hảo mà ông bố Phil Betterman của mình tạo
                    ra sẽ thật vui vẻ. Nhưng không, khu nhà rộng lớn ấy thực chất chẳng khác gì một
                    cái hang của người tiền sử, một vùng an toàn mà Dawn đã quá chán ngấy. Thậm chí
                    cô bé sẵn sàng mong muốn có được những “vết sẹo”, như để thể hiện một niềm tự
                    hào khi đã được tận hưởng những điều thú vị bên ngoài bức tường của ngôi nhà.
                  </p>
                  <p className="detail-news__text">
                    Các ông bố hay bà mẹ tuy có vài hành động không đáng ủng hộ, nhưng vốn dĩ cũng
                    không thể trách họ. Người xem hẳn sẽ cảm thông hơn sau khi thấu hiểu nỗi niềm
                    của bậc phụ huynh, dù là ở bất cứ thời đại nào thì cha mẹ chỉ muốn đem đến những
                    thứ tốt đẹp nhất cho con của họ.
                  </p>
                  <p className="detail-news__text">
                    Nơi nào có ánh sáng thì chỗ đấy sẽ là đường dẫn đến ngày mai tươi đẹp hơn. Thế
                    nhưng đôi lúc những điều tốt đẹp mà con người luôn ra sức tìm kiếm, vốn đã hiện
                    hữu ở cạnh họ ngay trong thời khắc hiện tại. Đây cũng chính là thứ giá trị mà
                    Guy đã nhận ra, khi trải qua nhiều biến cố cuộc đời. Đã có tình thân gia đình
                    thì ắt hẳn cần nhắc đến tình cảm đôi lứa. Chàng trai Guy và cô nàng Eep cũng để
                    lại ấn tượng bằng bữa đại tiệc tình yêu tuổi mới lớn “sến tới bến”, đúng với
                    tuyên ngôn “yêu nhau chỉ cần nhìn nhau cũng đủ no”.
                  </p>
                  <p className="detail-news__text">
                    Thật vậy, những rung động đầu đời đầy yêu, nét hờn dỗi vì sự hiểu lầm vô cùng
                    trẻ con vô cùng gần gũi, chân thật. Đặc biệt màn cầu hôn “bá đạo” và những câu
                    nói tưởng chừng sáo rỗng của Guy lẫn Eep đủ khiến chúng ta phải suy ngẫm về cách
                    nhìn nhận yêu thương đúng nghĩa.
                  </p>
                  <p className="detail-news__block-image">
                    <img src={cmt21} alt={cmt21} width="600px" height="350px"></img>
                  </p>
                  <p className="detail-news__text">
                    Đặc biệt nhất chính là yếu tố nữ quyền, đây có lẽ là phần chiếm trọn “spotlight”
                    ở trường đoạn cuối phim. Điều đáng khen ở đây chính là biên kịch đã vô cùng khéo
                    léo khi cài cắm chi tiết mang tính thời đại vào, không hề gây cảm giác gượng ép
                    khiên cưỡng. Thay vì bố trí theo tính chất sắp đặt, “nữ quyền” xuất hiện theo
                    cách bất ngờ nhất, đem lại cảm giác phấn khích và khi kết thúc cũng làm tất cả
                    phải trầm trồ thán phục.
                  </p>
                  <p className="detail-news__text">
                    Ngoài ra “Hội Chị Em Sấm Sét” hay “Băng Anh Em Cây Chuối” sẽ còn đem đến nhiều
                    tiếng cười đầy sảng khoái, đi kèm đó theo là những giây phút lắng đọng thật sự
                    đầy ý nghĩa.
                  </p>
                  <p className="detail-news__text">
                    Năm 2013, <i>The Croods</i> quy tụ dàn lồng tiếng gồm những ngôi sao hạng A của
                    Hollywood như Nicolas Cage, Emma Stone, Ryan Reynolds, Catherine Keener, tác
                    phẩm đã nhận đề cử Oscar ở hạng mục Phim Hoạt Hình Xuất Sắc. Ở lần hội ngộ này,
                    ngoài sự quay trở lại của các gương mặt cũ thì còn có sự góp giọng của Leslie
                    Man, Peter Dinklage và nữ diễn viên gốc Việt Kelly Marie Trần.
                  </p>
                  <p className="detail-news__text">
                    <b>Gia Đình Croods: Kỷ Nguyên Mới</b> đã ra mắt tại các rạp chiếu phim từ ngày
                    27.11.2020.
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
                    <i className="fa fa-angle-double-right"></i> [Review] Gia Đình Croods: Kỷ Nguyên
                    Mới – Vui Nhộn Nhưng Sâu Sắc Và Nữ Quyền Không Hề “Sượng”
                  </p>
                </NavLink>
                <NavLink to="/tin-tuc/binh-luan-phim/review-tiec-trang-mau-hoi-tu-anh-tai">
                  <p className="detail-news__post">
                    <i className="fa fa-angle-double-right"></i> [Review] Tiệc Trăng Máu: Hội Tụ Anh
                    Tài
                  </p>
                </NavLink>
                <NavLink to="/tin-tuc/binh-luan-phim/review-trai-tim-quai-vat-khi-ac-quy-la-ke-luong-thien-bi-ton-thuong">
                  <p className="detail-news__post">
                    <i className="fa fa-angle-double-right"></i> [Review] Trái Tim Quái Vật: Khi Ác
                    Quỷ Là Kẻ Lương Thiện Bị Tổn Thương
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
                          [Review] Demon Slayer: "Diệt Gọn" Khương Tử Nha Trên Bảng Doanh Thu Phòng
                          Vé Toàn Cầu
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
              <MovieVertical start={21} end={25}></MovieVertical>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Comment2;
