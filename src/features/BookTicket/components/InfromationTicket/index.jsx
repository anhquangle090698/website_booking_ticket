import PropTypes from 'prop-types';
import React from 'react';
import { secondsToHms } from 'utils/common';

InformationTicket.propTypes = {
  timer: PropTypes.number,
  detailTicketRoom: PropTypes.object.isRequired,
  listChairBooking: PropTypes.array,
};

function InformationTicket(props) {
  const { detailTicketRoom, timer, listChairBooking } = props;

  return (
    <div className="ticket-room__information">
      <div className="ticket-room__detail">
        <h4 className="ticket-room__name-cinema">{detailTicketRoom.thongTinPhim?.tenCumRap}</h4>
        <p className="ticket-room__address">{detailTicketRoom.thongTinPhim?.diaChi}</p>
        <p className="ticket-room__daytime">
          {detailTicketRoom.thongTinPhim?.gioChieu} - {detailTicketRoom.thongTinPhim?.ngayChieu} -{' '}
          {detailTicketRoom.thongTinPhim?.tenRap}
        </p>
      </div>
      <div className="ticket-room__block">
        <p className="ticket-room__name-film">{detailTicketRoom.thongTinPhim?.tenPhim}</p>
        <p className="ticket-room__total-price">
          {listChairBooking
            .reduce((tongTien, chair, index) => {
              return tongTien + chair.giaVe;
            }, 0)
            .toLocaleString(2) + ' đ'}
        </p>
      </div>
      <div className="ticket-room__countdown">
        <p className="ticket-room__text">Thời gian giữ ghế</p>
        <p className="ticket-room__time">{secondsToHms(timer)}</p>
      </div>
    </div>
  );
}

export default InformationTicket;
