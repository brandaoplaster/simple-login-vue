import Axios from 'axios'

export const AXIOS_HTTP = Axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
});
