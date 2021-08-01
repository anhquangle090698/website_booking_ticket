import axiosClient from './axiosClient';
import { ACCESS_TOKEN } from 'utils/config';

const UserApi = {
  postInformationAccount: (account) => {
    const url = '/QuanLyNguoiDung/ThongTinTaiKhoan';
    return axiosClient.post(url, account);
  },

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
