import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import UserApi from 'api/userApi';
import Swal from 'sweetalert2';

const initialUser = {
  //Information account user after sign in
  informationAccount: {},
};

//Action post information account
export const postInformationAccountAsync = createAsyncThunk(
  'user/postInformationAccount',
  async (account, thunkAPI) => {
    const response = await UserApi.postInformationAccount(account);

    return response.content;
  }
);

//Action put update user
export const putUpdateUserAsync = createAsyncThunk(
  'user/putUpdateUser',
  async (informationUpdate, thunkAPI) => {
    const response = await UserApi.putUpdateUser(informationUpdate);

    //Show alter update success
    if (response) {
      Swal.fire({
        icon: 'success',
        title: 'Cập nhật thông tin thành công',
        timer: 1500,
      });
    }

    // setTimeout(() => {
    //   window.location.reload();
    // }, 500);

    return response.content;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState: initialUser,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postInformationAccountAsync.fulfilled, (state, action) => {
      state.informationAccount = action.payload;
    });
    builder.addCase(putUpdateUserAsync.fulfilled, (state, action) => {
      state.informationAccount = action.payload;
    });
  },
});


const { reducer: userReducer } = userSlice;
export default userReducer;
