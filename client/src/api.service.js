import axios from 'axios';
// axios.defaults.baseURL = 'http://localhost:8080';

export default {
  fetchProducts: ({ page, sort, dir }) => {
    // `/api/products?page=${page}&sortBy=${sort}&dir=${dir}`
    let url = '/api/products';
    url += page ? `?page=${page}` : '';
    url += sort ? `&sortBy=${sort}` : '';
    url += dir ? `&dir=${dir}` : '';
    return axios.get(url);
  },
  fetchCustomerByEmail: (email) => axios.get(`/api/users?email=${email}`),
  saveCustomer: (customer) => axios.post('/api/users/save', customer),
};
