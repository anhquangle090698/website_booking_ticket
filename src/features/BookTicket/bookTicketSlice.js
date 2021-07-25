import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import bookTicketApi from 'api/bookTicketApi';

const initialBookTicket = {
  detailTicketRoom: {},
};

// get detail ticket room 'id showtime = ?'
export const getDetailTicketRoomAsync = createAsyncThunk(
  'bookTicket/getDetailTicketRoom',
  async (idShowtime, thunkAPI) => {
    const response = await bookTicketApi.getDetailTicketRoom(idShowtime);
    return response;
  }
);

export const bookTicketSlice = createSlice({
  name: 'bookTicket',
  initialState: initialBookTicket,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDetailTicketRoomAsync.fulfilled, (state, action) => {
      state.detailTicketRoom = action.payload;
    });
  },
});

export const {} = bookTicketSlice.actions;
const { reducer: bookTicketReducer } = bookTicketSlice;
export default bookTicketReducer;
