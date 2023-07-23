import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({ baseUrl: "  https://contact-app.mmsdev.site/api/v1" }),
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: (token,number) => ({
        url: `/contact?page=${number}`,
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["contact"],
    }),

  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetContactsQuery} = contactApi;
