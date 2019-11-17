import axios from 'axios';

export default Api = axios.create({
    baseURL: 'https://www.alphavantage.co'
});