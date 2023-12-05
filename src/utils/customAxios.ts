import axios from 'axios';

const customAxios = axios.create({
  baseURL: 'http://localhost:50000',
});

export { customAxios as axios };
