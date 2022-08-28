import { apiSlice } from "../../api/apiSlice";

export const hotelApiSlice = apiSlice.injectEndpoints({
  endpoints: (buider) => ({
    getHotels: buider.query({
      query: (q) => ({
        url: "/hotels",
        params: q,
      }),
    }),
    getHotelById: buider.query({
      query: (id) => `hotels/${id}`,
    }),
    getPropertyType: buider.query({
      query: () => "hotels/type",
    }),
    getFeaturedProperty: buider.query({
      query: () => "hotels/featured",
    }),
    getCountByCity: buider.query({
      query: (cities) => ({
        url: "hotels/countByCity",
        params: cities,
      }),
    }),
  }),
});

export const {
  useGetHotelsQuery,
  useGetHotelByIdQuery,
  useGetPropertyTypeQuery,
  useGetFeaturedPropertyQuery,
  useGetCountByCityQuery,
} = hotelApiSlice;
