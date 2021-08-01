import axiosClient from './axiosClient';
import { ACCESS_TOKEN } from 'utils/config';

const bookTicketApi = {
  getDetailTicketRoom: (idShowtime) => {
    const url = `/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${idShowtime}`;
    return axiosClient.get(url);
  },

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
