import axios from "axios";

export const alphaVantageApi = axios.create({
    baseURL: 'https://www.alphavantage.co/query'
  });
  