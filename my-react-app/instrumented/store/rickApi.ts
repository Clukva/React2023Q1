import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IStateFormStore } from '../interfaces/MyCharacterInterfases';

interface Response {
  results: IStateFormStore[];
}

export const rickApi = createApi({
  reducerPath: 'rickApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (build) => ({
    getCards: build.query<Response, string>({
      query: (name) => `character/${name}`,
    }),
  }),
});

export const { useGetCardsQuery } = rickApi;
