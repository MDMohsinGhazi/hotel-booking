import BookingCard from "../components/booking/BookingCard";
import EmptyBooking from "../components/booking/EmptyBooking";
import Spinner from "../components/comman/Spinner";
import { useGetBookingsQuery } from "../store/slice/booking/bookingApiSlice";

const Booking = () => {
  const { data: bookings, isLoading, isError, error } = useGetBookingsQuery();

  if (isLoading) {
    return (
      <div className="h-screen max-w-5xl mx-auto my-10">
        <Spinner />
      </div>
    );
  }
  if (isError) {
    return <div className="h-screen">Somthing went wronge</div>;
  }
  return (
    <main className="h-screen max-w-5xl mx-auto my-10">
      {bookings.length ? (
        <div>
          <h1 className="text-3xl font-semibold pb-4">Your Bookings</h1>
          <article className="space-y-5">
            {bookings.map((booking, index) => (
              <BookingCard key={index} booking={booking} />
            ))}
          </article>
        </div>
      ) : (
        <EmptyBooking />
      )}
    </main>
  );
};

export default Booking;
