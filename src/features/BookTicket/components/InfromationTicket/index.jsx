import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const secondsToHms = (d) => {
    d = Number(d);

    const m = Math.floor((d % 3600) / 60);
    const s = Math.floor((d % 3600) % 60);

    const minute = m < 10 ? `0${m}` : m;
    const second = s < 10 ? `0${s}` : s;
    return `${minute}:${second}`;
  };

function InformationTicket(props) {
  const { detailTicketRoom } = props;

  const [timer, setTimer] = useState(300);

  useEffect(() => {
    let intervalTimer;

    if (timer > 0) {
      intervalTimer = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    } else {
      clearInterval(intervalTimer);
    }

    return () => {
      clearInterval(intervalTimer);
    };
  });

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
        <p className="ticket-room__total-price">150.000đ</p>
      </div>
      <div className="ticket-room__countdown">
        <p className="ticket-room__text">Thời gian giữ ghế</p>
        <p className="ticket-room__time">{secondsToHms(timer)}</p>
      </div>
    </div>
  );
}

InformationTicket.propTypes = {};

export default InformationTicket;
