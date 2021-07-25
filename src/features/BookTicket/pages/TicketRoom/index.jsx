import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import InformationTicket from 'features/BookTicket/components/InfromationTicket';
import ListChair from 'features/BookTicket/components/ListChair';
import Booking from 'features/BookTicket/components/Booking';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailTicketRoomAsync } from 'features/BookTicket/bookTicketSlice';

function TicketRoom(props) {
  const { maLichChieu } = useParams();
  const dispatch = useDispatch();

  const detailTicketRoom = useSelector((state) => state.bookTicket.detailTicketRoom);
  console.log('detailTicketRoom', detailTicketRoom);

  useEffect(() => {
    const getDetailTicketRoom = async () => {
      dispatch(await getDetailTicketRoomAsync(maLichChieu));
    };

    getDetailTicketRoom();
  }, []);

  return (
    <div className="ticket-room">
      
      <div className="row">
        <div className="col-12 col-lg-9">
        <div className="ticket-room__container">
        <InformationTicket detailTicketRoom={detailTicketRoom}></InformationTicket>
          <ListChair detailTicketRoom={detailTicketRoom}></ListChair>
        </div>
        </div>
        <div className="col-12 col-lg-3">
          <Booking detailTicketRoom={detailTicketRoom}></Booking>
        </div>
      </div>

      <div className="ticket-room__expired"></div>

      <div className="ticket-room__book-small">
        <div className="ticket-room__seats">
          <span className="ticket-room__seat-small">A12,J05,H09</span>
        </div>
        <div className="ticket-room__confirm-small">
          <span className="ticket-room__text-confirm">Đặt vé</span>
        </div>
      </div>
    </div>
  );
}

TicketRoom.propTypes = {};

export default TicketRoom;
