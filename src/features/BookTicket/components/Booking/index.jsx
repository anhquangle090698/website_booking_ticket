import React from 'react';
import PropTypes from 'prop-types';
import notify from 'assets/images/exclamation.png';
import { logicNumberChairTicket } from 'utils/common';
import { unwrapResult } from '@reduxjs/toolkit';
import {
  getDetailTicketRoomAsync,
  postBookingTicketAsync,
} from 'features/BookTicket/bookTicketSlice';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';

function Booking(props) {
  const { detailTicketRoom, listChairBooking, maLichChieu, informationUser } = props;
  const dispatch = useDispatch();

  const renderChairBooking = () => {
    return listChairBooking.map((chair, index) => {
      return (
        <span className="ticket-room__seat" key={index}>
          {logicNumberChairTicket(chair.stt)},
        </span>
      );
    });
  };

  return (
    <div className="ticket-room__book">
      <p className="ticket-room__book-price">
        {listChairBooking
          .reduce((tongTien, chair, index) => {
            return tongTien + chair.giaVe;
          }, 0)
          .toLocaleString(2) + ' đ'}
      </p>
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
      <div className="ticket-room__book-seats">Ghế: {renderChairBooking()}</div>
      <div className="ticket-room__notify">
        <img src={notify} alt={notify} className="ticket-room__icon"></img>
        <span className="ticket-room__notify-text">
          Vé đã mua không thể đổi hoặc hoàn tiền Mã vé sẽ được gửi qua tin nhắn ZMS (tin nhắn Zalo)
          và Email đã nhập.
        </span>
      </div>
      <div className="ticket-room__confirm">
        <button
          className="button__confirm"
          onClick={async () => {
            if (typeof listChairBooking !== 'undefined' && listChairBooking.length > 0) {
              let objectBooking = {
                maLichChieu: maLichChieu,
                danhSachVe: listChairBooking,
                taiKhoanNguoiDung: informationUser.taiKhoan,
              };
              try {
                const result = dispatch(await postBookingTicketAsync(objectBooking));
                const currentUser = unwrapResult(result);

                Swal.fire({
                  icon: 'success',
                  title: 'Đặt Vé Thành Công!',
                  showConfirmButton: false,
                  timer: 1500,
                });
              } catch (error) {
                console.log(error.message);
              }
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Bạn Chưa Chọn Ghế!',
                showConfirmButton: false,
                timer: 1500,
              });
            }
          }}
        >
          Đặt Vé
        </button>
      </div>
    </div>
  );
}

Booking.propTypes = {};

export default Booking;
