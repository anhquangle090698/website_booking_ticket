import axiosClient from './axiosClient';

//Api use get/post/put/delete give data movies feature (render and handle logic movies)
const MoviesApi = {

  //Api get list movies return data(array), need params (id group default 'GP03')
  getListMovies: () => {
    const url = '/QuanLyPhim/LayDanhSachPhim?maNhom=GP03';
    return axiosClient.get(url);
  },

  //Api get search movie by name movie return data(array), need params (id group default 'GP03' && name movie)
  getSearchMovie: (nameFilm) => {
    const url = `/QuanLyPhim/LayDanhSachPhim?maNhom=GP03&tenPhim=${nameFilm}`;
    return axiosClient.get(url);
  },

  //Api get detail movie by id movie return data(object), need param (id movie)
  getDetailMovie: (idFilm) => {
    const url = `/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${idFilm}`;
    return axiosClient.get(url);
  },

  //Api get list system cinema return data(array)
  getListSystemCinema: () => {
    const url = '/QuanLyRap/LayThongTinHeThongRap';
    return axiosClient.get(url);
  },

  //Api get list showtime by id system cinema return data(array), need param (id group default 'GP03' && id system cinema)
  getListShowTimeSystemCinema: (idSystemCinema) => {
    const url = `/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${idSystemCinema}&maNhom=GP03`;
    return axiosClient.get(url);
  },

  //Api get all list showtime return data(array), need params (id group default 'GP03')
  getAllListShowtime: () => {
    const url = '/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP03';
    return axiosClient.get(url);
  }
};

export default MoviesApi;
