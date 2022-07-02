import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62c08443c134cf51ced083fd.mockapi.io/api/v1',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contact'],
    }),
    addContact: builder.mutation({
      query: values => ({
        url: '/contacts',
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;

// axios
// const API_ENDPOINT = './contacts';

// export const getContacts = async () => {
//   const res = await axios.get(`${BASE_URL}${API_ENDPOINT}`);
//   return res.statusText === 'OK'
//     ? res.data
//     : Promise.reject(new Error(res.statusText));
// };

// export const addContact = async contact => {
//   const res = await axios.get(`${BASE_URL}${API_ENDPOINT}`, contact);
//   return res.statusText === 'OK'
//     ? res.data
//     : Promise.reject(new Error(res.statusText));
// };

// export const deleteContact = async id => {
//   const res = await axios.delete(`${BASE_URL}${API_ENDPOINT}/${id}`);
//   return res.statusText === 'OK'
//     ? res.data
//     : Promise.reject(new Error(res.statusText));
// };
