import axiosClient from './axiosClient';
import { ACCESS_TOKEN } from 'utils/config';

//Api use get/post/put/delete give data user feature (render && handle logic user)
const UserApi = {
  //Api post information account (after sign in) return data(object)
  postInformationAccount: (account) => {
    const url = '/QuanLyNguoiDung/ThongTinTaiKhoan';
    return axiosClient.post(url, undefined, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
      }
    });
  },

  //Api put update information user return data(string)
  //Need data information update
  // {
  //   "taiKhoan": "string",
  //   "matKhau": "string",
  //   "email": "string",
  //   "soDt": "string",
  //   "maNhom": "string",
  //   "maLoaiNguoiDung": "string",
  //   "hoTen": "string"
  // }
  //Need token (authorization)
  putUpdateUser: (informationUpdate) => {
    const url = '/QuanLyNguoiDung/CapNhatThongTinNguoiDung';
    return axiosClient.put(url, informationUpdate, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
      },
    });
  },
};

export default UserApi;
