import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import LoginApi from 'api/loginApi';
import Swal from 'sweetalert2';
import { ACCESS_TOKEN, USER_LOGIN } from 'utils/config';
import history from 'utils/history';

//Information user save local storage
let userSignInStorage = {};

//If logged, get information from local storage assign for user.
localStorage.getItem(USER_LOGIN)
  ? (userSignInStorage = JSON.parse(localStorage.getItem(USER_LOGIN)))
  : (userSignInStorage = {});

const initialLogin = {
  //Information user after sign in
  informationUser: userSignInStorage,
};

//Action post sign in
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

    //Previous page
    history.goBack();

    return response;
  }
);

//Action post sign up
export const postSignUpAsync = createAsyncThunk(
  'login/postSignUp',
  async (informationSignUp, thunkAPI) => {
    const response = await LoginApi.postSignUp(informationSignUp);

    //Show alter sign up success
    Swal.fire({
      icon: 'success',
      title: 'Đăng ký thành công',
      text: 'Dùng tài khoản này để đăng nhập',
      timer: 1500,
    });

    return response;
  }
);

export const loginSlice = createSlice({
  name: 'login',
  initialState: initialLogin,
  reducers: {
    //Handle logic when use sign out
    handleSignOut: (state) => {
      state.informationUser = {};
    },
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
