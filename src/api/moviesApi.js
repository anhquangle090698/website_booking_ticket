import axiosClient from "./axiosClient";

// api/productApi.js
const MoviesApi = {
  getAll: (params) => {
    const url = "/QuanLyPhim/LayDanhSachPhim?maNhom=GP02";
    return axiosClient.get(url
      // params,
      // headers : {
      //     'testing' : 'test'
      // }
      // baseURL
    );
  },

  // get: (id) => {
  //   const url = `/products/${id}`;
  //   return axiosClient.get(url);
  // },
};

export default MoviesApi;
