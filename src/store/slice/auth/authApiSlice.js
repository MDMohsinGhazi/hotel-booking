import { apiSlice } from "../../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (buider) => ({
    login: buider.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: { ...credentials },
      }),
      invalidatesTags: ["user"],
    }),
    register: buider.mutation({
      query: (credentials) => ({
        url: "auth/register",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApiSlice;
