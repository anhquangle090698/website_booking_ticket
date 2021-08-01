import { unwrapResult } from '@reduxjs/toolkit';
import {
  getDetailTicketRoomAsync,
  postBookingTicketAsync,
} from 'features/BookTicket/bookTicketSlice';
import Booking from 'features/BookTicket/components/Booking';
import InformationTicket from 'features/BookTicket/components/InfromationTicket';
import ListChair from 'features/BookTicket/components/ListChair';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { logicNumberChairTicket } from 'utils/common';

function TicketRoom(props) {
  const { maLichChieu } = useParams();
  const dispatch = useDispatch();

  const detailTicketRoom = useSelector((state) => state.bookTicket.detailTicketRoom);
  const listChairBooking = useSelector((state) => state.bookTicket.listChairBooking);
  const informationUser = useSelector((state) => state.login.informationUser);

  console.log('informationUser', informationUser);
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

  useEffect(() => {
    const getDetailTicketRoom = async () => {
      dispatch(await getDetailTicketRoomAsync(maLichChieu));
    };

    getDetailTicketRoom();
  }, []);

  const renderChairBooking = () => {
    return listChairBooking.map((chair, index) => {
      return (
        <span className="ticket-room__seat-small" key={index}>
          {logicNumberChairTicket(chair.stt)},
        </span>
      );
    });
  };

  return (
    <div className="ticket-room">
      <div className="row">
        <div className="col-12 col-lg-9">
          <div className="ticket-room__container">
            <InformationTicket
              detailTicketRoom={detailTicketRoom}
              listChairBooking={listChairBooking}
              timer={timer}
            ></InformationTicket>
            <ListChair
              detailTicketRoom={detailTicketRoom}
              listChairBooking={listChairBooking}
            ></ListChair>
          </div>
        </div>
        <div className="col-12 col-lg-3">
          <Booking
            detailTicketRoom={detailTicketRoom}
            listChairBooking={listChairBooking}
            maLichChieu={maLichChieu}
            informationUser={informationUser}
          ></Booking>
        </div>
      </div>

      {timer <= 0 ? (
        <div className="ticket-room__expired">
          <div className="ticket-room__expired-main">
            <p className="ticket-room__text-expired">
              Đã hết thời gian giữ ghế. Vui lòng thực hiện đơn hàng trong thời hạn 5 phút.
              <span
                className="ticket-room__rebook"
                onClick={() => {
                  window.location.reload();
                }}
              >
                Đặt vé lại
              </span>
            </p>
          </div>
        </div>
      ) : (
        ''
      )}

      <div className="ticket-room__book-small">
        <div className="ticket-room__seats">{renderChairBooking()}</div>
        <div
          className="ticket-room__confirm-small"
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
          <span className="ticket-room__text-confirm">Đặt vé</span>
        </div>
      </div>
    </div>
  );
}

TicketRoom.propTypes = {};

export default TicketRoom;
