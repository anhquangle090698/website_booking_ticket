import axiosClient from "./axiosClient";

// api/productApi.js
const ProductApi = {
  getAll: (params) => {
    const url = "/products";
    return axiosClient.get(url, {
      params,
      // headers : {
      //     'testing' : 'test'
      // }
      // baseURL
    });
  },

  get: (id) => {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
};

export default ProductApi;
