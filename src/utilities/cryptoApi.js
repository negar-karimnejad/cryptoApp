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
    getMarkets: builder.query({
      query: () => createRequest("/markets"),
    }),
    getCryptoNews: builder.query({
      query: () => createRequest("/news"),
    }),
  }),
});

export const { useGetCryptosQuery, useGetMarketsQuery, useGetCryptoNewsQuery } =
  cryptoApi;
