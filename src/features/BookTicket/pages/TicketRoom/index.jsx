import Loading from 'components/Loading';
import {
  getDetailTicketRoomAsync,
  postBookingTicketAsync,
} from 'features/BookTicket/bookTicketSlice';
import Booking from 'features/BookTicket/components/Booking';
import InformationTicket from 'features/BookTicket/components/InfromationTicket';
import ListChair from 'features/BookTicket/components/ListChair';
import { useShowLoading, useShowTimeOut } from 'hooks/customHook';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { logicNumberChairTicket } from 'utils/common';

TicketRoom.propTypes = {
  maLichChieu: PropTypes.string,
  loading: PropTypes.bool,
  timer: PropTypes.number,
  detailTicketRoom: PropTypes.object,
  listChairBooking: PropTypes.array,
  informationUser: PropTypes.object,
  renderChairBooking: PropTypes.func,
  handleBookTicket: PropTypes.func,
  getDetailTicketRoom: PropTypes.func,
};



function TicketRoom(props) {
  //Get id showtime from path url.
  const { maLichChieu } = useParams();

  //Custom hook show loading
  const loading = useShowLoading(1500);
  //Custom hook show time out
  const timer = useShowTimeOut(300, 1000);

  const dispatch = useDispatch();

  const detailTicketRoom = useSelector((state) => state.bookTicket.detailTicketRoom);
  const listChairBooking = useSelector((state) => state.bookTicket.listChairBooking);
  const informationUser = useSelector((state) => state.login.informationUser);

  useEffect(() => {
    const getDetailTicketRoom = async () => {
      dispatch(await getDetailTicketRoomAsync(maLichChieu));
    };

    getDetailTicketRoom();
  }, []);

  //Render list chair are choosing
  const renderChairBooking = () => {
    return listChairBooking.map((chair, index) => {
      return (
        <span className="ticket-room__seat-small" key={index}>
          {logicNumberChairTicket(chair.stt)},
        </span>
      );
    });
  };

  const handleBookTicket = async () => {
    if (typeof listChairBooking !== 'undefined' && listChairBooking.length > 0) {
      let objectBooking = {
        maLichChieu: maLichChieu,
        danhSachVe: listChairBooking,
        taiKhoanNguoiDung: informationUser.taiKhoan,
      };
      try {
        dispatch(await postBookingTicketAsync(objectBooking));

        Swal.fire({
          icon: 'success',
          title: 'Đặt Vé Thành Công!',
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {
        // console.log(error.message);
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Bạn Chưa Chọn Ghế!',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };



  return (
    <>
      {loading && <Loading></Loading>}

      {!loading && (
        <>
          <div className="ticket-room">
            <div className="row">
              <div className="col-12 col-lg-9">
                <NavLink to="/" className="ticket-room__back">Trở về trang chủ</NavLink>
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
                onClick={() => {
                  handleBookTicket();
                }}
              >
                <span className="ticket-room__text-confirm">Đặt vé</span>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default TicketRoom;
