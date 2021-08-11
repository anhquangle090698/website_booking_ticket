import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import bookTicketApi from 'api/bookTicketApi';

const initialBookTicket = {
  //Detail ticket room by id showtime
  detailTicketRoom: {},

  //List all chair use is booking
  listChairBooking: [],
};

//Action get detail ticket room
export const getDetailTicketRoomAsync = createAsyncThunk(
  'bookTicket/getDetailTicketRoom',
  async (idShowtime, thunkAPI) => {
    const response = await bookTicketApi.getDetailTicketRoom(idShowtime);
    return response;
  }
);

//action post booking ticket
export const postBookingTicketAsync = createAsyncThunk(
  'bookTicket/postBookingTicket',
  async (informationTicket, { dispatch }) => {
    const response = await bookTicketApi.postBookingTicket(informationTicket);
    dispatch(await getDetailTicketRoomAsync(informationTicket.maLichChieu));
    return response;
  }
);

export const bookTicketSlice = createSlice({
  name: 'bookTicket',
  initialState: initialBookTicket,
  reducers: {
    //Handle logic choose chair
    chooseChairBooking: (state, action) => {
      const listChairBookingNew = [...state.listChairBooking];

      let index = listChairBookingNew.findIndex((chair, index) => {
        return chair.maGhe === action.payload.maGhe;
      });

      index !== -1
        ? listChairBookingNew.splice(index, 1)
        : listChairBookingNew.push(action.payload);

      state.listChairBooking = listChairBookingNew;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDetailTicketRoomAsync.fulfilled, (state, action) => {
      state.detailTicketRoom = action.payload;
    });
    builder.addCase(postBookingTicketAsync.fulfilled, (state, action) => {
      state.listChairBooking = [];
    });
  },
});

export const { chooseChairBooking } = bookTicketSlice.actions;
const { reducer: bookTicketReducer } = bookTicketSlice;
export default bookTicketReducer;
