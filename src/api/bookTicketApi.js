import axiosClient from './axiosClient';
import { ACCESS_TOKEN } from 'utils/config';

//Api use get/post/put/delete give data book ticket feature (render and handle logic book ticket)
const bookTicketApi = {
  //Api get detail ticket room return data(object), need params (id showtime)
  getDetailTicketRoom: (idShowtime) => {
    const url = `/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${idShowtime}`;
    return axiosClient.get(url);
  },

  //Api post book ticket return data(string)
  //Need data information ticket:
  // {
  //   "maLichChieu": 0,
  //   "danhSachVe": [
  //     {
  //       "maGhe": 0,
  //       "giaVe": 0
  //     }
  //   ],
  //   "taiKhoanNguoiDung": "string"
  // }
  //Need token (authorization)
  postBookingTicket: (informationTicket) => {
    const url = '/QuanLyDatVe/DatVe';
    return axiosClient.post(url, informationTicket, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
      },
    });
  },
};

export default bookTicketApi;
