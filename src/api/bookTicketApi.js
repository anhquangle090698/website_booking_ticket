import axiosClient from './axiosClient';

const bookTicketApi = {
  getDetailTicketRoom : (idShowtime) => {
    const url = `/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${idShowtime}`;
    return axiosClient.get(url);
  },
};

export default bookTicketApi;
