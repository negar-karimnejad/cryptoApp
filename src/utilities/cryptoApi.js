import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseUrl = "https://openapiv1.coinstats.app";

const cryptoApiHeaders = {
  accept: "application/json",
  "X-API-KEY": "U7kn8e2jfOubxRgBXklUK/bAl2DLR9t9Y6htbP4yPFM=",
};

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest("/coins"),
    }),
    getCryptoDetails: builder.query({
      query: ({ coinId }) => createRequest(`/coins/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) =>
        createRequest(`coins/${coinId}/charts?period=${timeperiod}`),
    }),
    getMarkets: builder.query({
      query: () => createRequest("/markets"),
    }),
    getCryptoNews: builder.query({
      query: ({ newsCategory }) =>
        createRequest(`/news/search?query=${newsCategory}`),
    }),
    getExchanges: builder.query({
      query: () => createRequest("/tickers/exchanges"),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetMarketsQuery,
  useGetCryptoNewsQuery,
  useGetCryptoHistoryQuery,
  useGetExchangesQuery,
} = cryptoApi;
