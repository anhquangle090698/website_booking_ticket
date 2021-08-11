import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import LoginApi from 'api/loginApi';
import { USER_LOGIN, ACCESS_TOKEN } from 'utils/config';
import Swal from 'sweetalert2';
import history from 'utils/history';
import UserApi from 'api/userApi';

const initialUser = {
  //Information account user after sign in
  informationAccount: {},
};

//Action post information account
export const postInformationAccountAsync = createAsyncThunk(
  'user/postInformationAccount',
  async (account, thunkAPI) => {
    const response = await UserApi.postInformationAccount(account);

    return response;
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

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  
    return response;
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

export const {} = userSlice.actions;
const { reducer: userReducer } = userSlice;
export default userReducer;
