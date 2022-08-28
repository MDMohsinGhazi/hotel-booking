import { apiSlice } from "../../api/apiSlice";

export const bookingApiSlice = apiSlice.injectEndpoints({
  endpoints: (buider) => ({
    bookRoom: buider.mutation({
      query: (data) => ({
        url: "bookings",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["booking"],
    }),
    cancelBooking: buider.mutation({
      query: (id) => ({
        url: `bookings/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["booking"],
    }),
    getBookings: buider.query({
      query: () => "bookings/mybookings",
      providesTags: ["booking", "user"],
    }),
  }),
});

export const {
  useGetBookingsQuery,
  useBookRoomMutation,
  useCancelBookingMutation,
} = bookingApiSlice;
