import React from 'react';
import PropTypes from 'prop-types';
import notify from 'assets/images/exclamation.png';

function Booking(props) {
  const { detailTicketRoom } = props;
  return (
    <div className="ticket-room__book">
      <p className="ticket-room__book-price">150.000đ</p>
      <div className="ticket-room__book-detail">
        <img
          src={detailTicketRoom.thongTinPhim?.hinhAnh}
          alt={detailTicketRoom.thongTinPhim?.hinhAnh}
          className="ticket-room__image"
        />
        <div className="ticket-room__book-block">
          <p className="ticket-room__book-name">{detailTicketRoom.thongTinPhim?.tenPhim}</p>
          <p className="ticket-room__book-daytime">
            {detailTicketRoom.thongTinPhim?.gioChieu} - {detailTicketRoom.thongTinPhim?.ngayChieu} -{' '}
            {detailTicketRoom.thongTinPhim?.tenRap}
          </p>
        </div>
      </div>
      <div className="ticket-room__book-seats">
        Ghế: <span className="ticket-room__seat">B14,C04,D06</span>
      </div>
      <div className="ticket-room__notify">
        <img src={notify} alt={notify} className="ticket-room__icon"></img>
        <span className="ticket-room__notify-text">
          Vé đã mua không thể đổi hoặc hoàn tiền Mã vé sẽ được gửi qua tin nhắn ZMS (tin nhắn Zalo)
          và Email đã nhập.
        </span>
      </div>
      <div className="ticket-room__confirm">
        <button className="button__confirm">Đặt Vé</button>
      </div>
    </div>
  );
}

Booking.propTypes = {};

export default Booking;
