import axios  from 'axios';

const Api = axios.create({
baseURL: 'https://free.currencyconverterapi.com/api/v5/convert'
});

export default Api;