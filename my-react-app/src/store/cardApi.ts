import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IItems } from '../interfaces/MyCharacterInterfases';

interface Response {
  results: IItems;
}

export const cardApi = createApi({
  reducerPath: 'cardApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (build) => ({
    getCard: build.query<Response, string>({
      query: (name) => `character/${name}`,
    }),
  }),
});

export const { useGetCardQuery } = cardApi;
