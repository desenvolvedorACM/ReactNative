import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://www.alphavantage.co/query?function='
});

export default Api;