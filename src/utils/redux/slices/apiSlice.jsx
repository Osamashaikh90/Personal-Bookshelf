import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://openlibrary.org/' }),
  endpoints: (builder) => ({
    searchBooks: builder.query({
      query: ({ query, limit = 10, page = 1 }) => 
        `search.json?q=${query}&limit=${limit}&page=${page}`,
    }),
  }),
});

export const { useSearchBooksQuery } = apiSlice;
export default apiSlice;