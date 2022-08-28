import { apiSlice } from "../../api/apiSlice";

export const roomApiSlice = apiSlice.injectEndpoints({
  endpoints: (buider) => ({
    getRoomsByHotel: buider.query({
      query: (id) => `hotels/${id}/rooms`,
    }),
  }),
});

export const { useGetRoomsByHotelQuery } = roomApiSlice;
