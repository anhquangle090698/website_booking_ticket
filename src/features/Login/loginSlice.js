import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import LoginApi from 'api/loginApi';
import { USER_LOGIN, ACCESS_TOKEN } from 'utils/config';
import Swal from 'sweetalert2';
import history from 'utils/history';

let userSignInStorage = {};

localStorage.getItem(USER_LOGIN)
  ? (userSignInStorage = JSON.parse(localStorage.getItem(USER_LOGIN)))
  : (userSignInStorage = {});

const initialLogin = {
  informationUser: userSignInStorage,
};

//Post sign in 'data = {taiKhoan : ?, matKhau : ?}'
export const postSignInAsync = createAsyncThunk(
  'login/postSignIn',
  async (informationSignIn, { rejectWithValue }) => {
    const response = await LoginApi.postSignIn(informationSignIn);

    // thunkAPI.dispatch(...)
    // The value we return becomes the `fulfilled` action payload
    //save data to local storage
    localStorage.setItem(USER_LOGIN, JSON.stringify(response));

    //save token to local storage
    localStorage.setItem(ACCESS_TOKEN, response.accessToken);

    Swal.fire({
      icon: 'success',
      title: 'Đăng nhập thành công',
      text: 'Chào mừng đến với G2 Cinema!',
      timer: 1500,
    });

    history.goBack();

    return response;
  }
);

export const postSignUpAsync = createAsyncThunk(
  'login/postSignUp',
  async (informationSignUp, thunkAPI) => {
    const response = await LoginApi.postSignUp(informationSignUp);

    return response;
  }
);

export const loginSlice = createSlice({
  name: 'login',
  initialState: initialLogin,
  reducers: {
    handleSignOut : (state) => {
      state.informationUser = {};
    }
  },
  extraReducers: (builder) => {
    builder.addCase(postSignInAsync.fulfilled, (state, action) => {
      state.informationUser = action.payload;
    });
  },
});

export const { handleSignOut } = loginSlice.actions;
const { reducer: loginReducer } = loginSlice;
export default loginReducer;
