import React from 'react';
import PropTypes from 'prop-types';

Introduction.propTypes = {
  textWhite: PropTypes.string,
};

Introduction.defaultProps = {
  textWhite: '',
};

function Introduction(props) {
  const { textWhite } = props;
  return (
    <div className={textWhite ? 'introduction text--white' : 'introduction'}>
      <div className={textWhite ? 'introduction__title movie-title' : 'movie-title'}>G2 Cinema</div>
      <div className="introduction__content">
        <p className="introduction__text">
          <b> G2 Cinema </b> là một trong những công ty tư nhân đầu tiên về điện ảnh được thành lập
          từ năm 2003, đã khẳng định thương hiệu là 1 trong 10 địa điểm vui chơi giải trí được yêu
          thích nhất. Ngoài hệ thống rạp chiếu phim hiện đại, thu hút hàng triệu lượt người đến xem,{' '}
          <b> G2 Cinema </b>
          còn hấp dẫn khán giả bởi không khí thân thiện cũng như chất lượng dịch vụ hàng đầu.
        </p>
        <p className="introduction__text">
          Đến website <i> g2cinema.cybersoft </i> , quý khách sẽ được cập nhật nhanh chóng{' '}
          <i> các phim hay nhất phim mới nhất </i> đang chiếu hoặc sắp chiếu. Lịch chiếu tại mọi hệ
          thống rạp chiếu phim của <b> G2 Cinema </b> cũng được cập nhật đầy đủ hàng ngày hàng giờ
          trên trang chủ.
        </p>
        <p className="introduction__text">
          Đặt vé tại <b> G2 Cinema </b> dễ dàng chỉ sau vài thao tác vô cùng đơn giản. Để mua vé,
          hãy vào tab Mua vé. Quý khách có thể chọn Mua vé theo phim, theo rạp, theo ngày tùy cách
          nào tiện lợi nhất cho bản thân.Sau đó, tiến hành mua vé theo các bước hướng dẫn. Chỉ trong
          vài phút, quý khách sẽ nhận được tin nhắn và email phản hồi <i> Đặt vé thành công </i> của{' '}
          <b> G2 Cinema </b>. Quý khách có thể dùng tin nhắn lấy vé tại quầy vé của{' '}
          <b> G2 Cinema </b> hoặc quét mã QR để một bước vào rạp mà không cần tốn thêm bất kỳ công
          đoạn nào nữa.
        </p>
        <p className="introduction__text">
          Nếu bạn đã chọn được phim hay để xem, hãy đặt vé cực nhanh bằng box <i> Mua Vé Nhanh </i>{' '}
          ngay từ Trang Chủ. Chỉ cần một phút, tin nhắn và email phản hồi của <b> G2 Cinema </b> sẽ
          gửi ngay vào điện thoại và hộp mail của bạn.
        </p>
        <p className="introduction__text">
          Nếu chưa quyết định sẽ xem phim mới nào, hãy tham khảo các bộ phim hay trong mục{' '}
          <i> Phim Đang Chiếu </i> cũng như <i> Phim Sắp Chiếu </i> tại rạp chiếu phim bằng cách vào
          mục Bình Luận Phim ở Góc Điện Ảnh để đọc những bài bình luận chân thật nhất, tham khảo và
          cân nhắc. Sau đó, quý khách hãy đặt vé bằng box Mua Vé Nhanh ngay ở đầu trang để chọn được
          suất chiếu và chỗ ngồi vừa ý nhất.
        </p>
        <p className="introduction__text">
          {' '}
          <b> G2 Cinema </b> luôn có những chương trình khuyến mãi, ưu đãi, quà tặng vô cùng hấp dẫn
          như giảm giá vé, tặng vé xem phim miễn phí, tặng Combo, tặng quà phim… dành cho quý khách.
          Trang web galaxycine.vn còn có mục <i> Góc Điện Ảnh </i> - sở hữu lượng dữ liệu về phim,
          diễn viên và đạo diễn, giúp quý khách dễ dàng chọn được phim mình yêu thích và nâng cao
          kiến thức về điện ảnh của bản thân. Ngoài ra, vào mỗi tháng, <b> G2 Cinema </b> cũng giới
          thiệu các phim sắp chiếu hot nhất trong mục Phim Hay Tháng để quý khách sớm có sự tính
          toán.
        </p>
        <p className="introduction__text">
          Hiện nay, <b> G2 Cinema </b> đang ngày càng phát triển hơn nữa với các chương trình đặc
          sắc, các khuyến mãi hấp dẫn, đem đến cho khán giả những bộ phim bom tấn của thế giới và
          Việt Nam nhanh chóng và sớm nhất.
        </p>
      </div>
    </div>
  );
}

export default Introduction;
