import axios from 'axios';

export default {
  fetchProducts: ({ page, sort, dir }) => {
    // `/api/products?page=${page}&sortBy=${sort}&dir=${dir}`
    let url = '/api/products';
    url += page ? `?page=${page}` : '';
    url += sort ? `&sortBy=${sort}` : '';
    url += dir ? `&dir=${dir}` : '';
    return axios.get(url);
  },
};
