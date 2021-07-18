import { createSlice } from '@reduxjs/toolkit';

const initialLogic = {
  sourceVideo: '',
  active: false,
};

export const logicSlice = createSlice({
  name: 'logic',
  initialState: initialLogic,
  reducers: {
      openPopup : (state, action) => {
        state.sourceVideo = action.payload;
        state.active = true;
      },
      closePopup : (state) => {
          state.active = false;
          state.sourceVideo = '';
      }
  },
});

export const { openPopup, closePopup } = logicSlice.actions;
const { reducer: logicReducer } = logicSlice;
export default logicReducer;
