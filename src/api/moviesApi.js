import axiosClient from "./axiosClient";

// api/productApi.js
const MoviesApi = {
  getListMovies: () => {
    const url = '/QuanLyPhim/LayDanhSachPhim?maNhom=GP03';
    return axiosClient.get(url
      // params,
      // headers : {
      //     'testing' : 'test'
      // }
      // baseURL
    );
  },

  getDetailMovie: (idFilm) => {
    const url = `/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${idFilm}`;
    return axiosClient.get(url);
  },

  getListSystemCinema : () => {
    const url = '/QuanLyRap/LayThongTinHeThongRap';
    return axiosClient.get(url);
  },

  getListShowTimeSystemCinema : (idSystemCinema) => {
    const url = `/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${idSystemCinema}&maNhom=GP03`;
    return axiosClient.get(url);
  }

};

export default MoviesApi;
