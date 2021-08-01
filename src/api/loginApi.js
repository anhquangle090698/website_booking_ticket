import axiosClient from './axiosClient';

const LoginApi = {
  postSignIn: (informationSignIn) => {
    const url = '/QuanLyNguoiDung/DangNhap';
    return axiosClient.post(url, informationSignIn);
  },

  postSignUp: (informationSignUp) => {
    const url = '/QuanLyNguoiDung/DangKy';
    return axiosClient.post(url, informationSignUp);
  },
};

export default LoginApi;
